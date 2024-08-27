<?php

namespace App\Repositories\Message\Providers\Whatsapp;

use App\Dto\Message\SendMedia\MediaMessageDto;
use App\Exceptions\EvolutionApi\InstanceNotFoundException;
use App\Repositories\Message\Interfaces\MessageProviderInterface;
use Illuminate\Contracts\Config\Repository as Config;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;

class EvolutionApiRepository implements MessageProviderInterface
{
    protected string $baseUrl;
    protected string $apiKey;
    protected string $instance;
    const DDI = '55';
    const WHATSAPP_DOMAIN = '@s.whatsapp.net';

    public function __construct(Config $config)
    {
        $this->baseUrl = $config->get('services.evolution_api.url');
        $this->apiKey = $config->get('services.evolution_api.api_key');
        $this->instance = $config->get('services.evolution_api.instance');
    }

    /**
     * @return bool
     * @throws \JsonException
     * @throws \Throwable
     */
    public function isInstanceOpen(): bool
    {
        $instance = $this->getConnectionState();
        return !empty($instance['instance']['state']) && $instance['instance']['state'] == 'open';
    }

    /**
     * @return mixed
     * @throws \JsonException
     * @throws \Throwable
     */
    public function getConnectionState(): array
    {
        $url = $this->baseUrl . '/instance/connectionState/' . $this->instance;

        try {
            $response = Http::withHeaders([
                'Content-Type' => 'application/json',
                'apikey' => $this->apiKey,
            ])->get($url);

            if ($response->status() == Response::HTTP_NOT_FOUND) {
                throw new InstanceNotFoundException();
            }

            return $response->json();
        } catch (\Throwable $exception) {
            Log::error(
                'ERRO_AO_CONSULTAR_STATUS_DE_CONEXAO_DA_INSTANCIA',
                [
                    'message' => $exception->getMessage(),
                    'code' => $exception->getCode(),
                    'file' => $exception->getFile(),
                    'trace' => $exception->getTraceAsString(),
                ]
            );

            throw $exception;
        }
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
            Http::timeout(60)
                ->withHeaders([
                    'Content-Type' => 'application/json',
                    'apikey' => $this->apiKey,
                ])->post(
                    $url,
                    $data
                );

            Log::info('SUCESSO_NO_ENVIO_DA_MENSAGEM', [
                'phone' => $phoneNumber,
                'media_type' => $mediaMessageDto->getMediaType()->value,
                'caption' => $mediaMessageDto->getCaption(),
            ]);

            return [
                'success' => true,
                'message' => 'Mensagem enviada com sucesso!'
            ];

        } catch (\Throwable $exception) {
            Log::error(
                'ERRO_NO_ENVIO_DA_MENSAGEM',
                [
                    'phone' => $phoneNumber,
                    'media_type' => $mediaMessageDto->getMediaType()->value,
                    'caption' => $mediaMessageDto->getCaption(),
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
                'media' => $mediaMessageDto->getMedia()
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
