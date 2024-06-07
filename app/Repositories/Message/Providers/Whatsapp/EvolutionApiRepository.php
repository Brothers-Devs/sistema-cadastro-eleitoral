<?php

namespace App\Repositories\Message\Providers\Whatsapp;

use App\Dto\Message\SendMedia\MediaMessageDto;
use App\Repositories\Message\Interfaces\MessageProviderInterface;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class EvolutionApiRepository implements MessageProviderInterface
{
    protected string $baseUrl;
    protected string $apiKey;
    protected string $instance;
    const DDI = '55';
    const WHATSAPP_DOMAIN = '@s.whatsapp.net';

    public function __construct(Config $config)
    {
        $this->baseUrl = $config->get('service.evolution_api.url');
        $this->apiKey = $config->get('service.evolution_api.key');
        $this->instance = $config->get('service.evolution_api.instance');
    }

    /**
     * @param string $phoneNumber
     * @param MediaMessageDto|null $mediaMessageDto
     * @return array
     */
    public function sendMedia(string $phoneNumber, ?MediaMessageDto $mediaMessageDto): array
    {
        $url = $this->baseUrl . '/message/sendMedia/' . $this->instance;
        $data = $this->buildPayload($phoneNumber, $mediaMessageDto);

        try {
            Http::withHeaders([
                'Content-Type' => 'application/json',
                'apikey' => $this->apiKey,
            ])->post(
                $url,
                $data
            );

            return [
                'success' => true,
                'message' => 'Mensagem enviada com sucesso!'
            ];

        } catch (\Throwable $exception) {
            Log::error(
                'ERRO_NO_ENVIO_DA_MENSAGEM',
                [
                    'message' => $exception->getMessage(),
                    'code' => $exception->getCode(),
                    'file' => $exception->getFile(),
                    'trace' => $exception->getTraceAsString(),
                ]
            );

            return [
                'success' => false,
                'message' => 'Ocorreu um erro ao enviar a mensagem.',
            ];
        }
    }

    /**
     * @param string $phoneNumber
     * @param MediaMessageDto $mediaMessageDto
     * @return array
     */
    public function buildPayload(string $phoneNumber, MediaMessageDto $mediaMessageDto): array
    {
        return [
            'number' => $this->adapterPhoneNumber($phoneNumber),
            'options' => [
                'delay' => 1200,
                'presence' => 'composing'
            ],
            'mediaMessage' => [
                'mediatype' => $mediaMessageDto->getMediaType(),
                'caption' => $mediaMessageDto->getCaption(),
                'media' => $mediaMessageDto->getMediaInBase64()
            ],
        ];
    }

    /**
     * @param string $number
     * @return string
     */
    public function adapterPhoneNumber(string $number): string
    {
        $number = preg_replace('/\D+/', '', $number);
        $number = substr_replace($number, '', 2, 1);
        return self::DDI . $number . self::WHATSAPP_DOMAIN;
    }
}
