<?php

declare(strict_types=1);

namespace App\Services;

use App\Dto\Message\SendMedia\MediaMessageFactory;
use App\Dto\Message\SendMedia\SendMediaInputDto;
use App\Exceptions\EvolutionApi\ConnectionIsNotOpenException;
use App\Jobs\SendMediaWithBase64Job;
use App\Jobs\SendMediaWithUrlJob;
use App\Repositories\Message\Interfaces\MessageProviderInterface;
use Illuminate\Support\Facades\Bus;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class MessageService
{
    public function __construct(
        protected MessageProviderInterface $messageRepository,
        protected LeaderService            $leaderService
    )
    {
    }

    /**
     * @param SendMediaInputDto $sendMediaInputDto
     * @return array
     * @throws ConnectionIsNotOpenException
     * @throws \JsonException
     * @throws \Throwable
     */
    public function sendMediaToVoters(SendMediaInputDto $sendMediaInputDto): array
    {
        if (!$this->messageRepository->isInstanceOpen()) {
            Log::error('ERRO_INSTANCIA_ESTA_FECHADA', [
                'leader_id' => $sendMediaInputDto->getLeaderId()
            ]);
            throw new ConnectionIsNotOpenException();
        }

        // Salvar a mídia no storage
        $path = $sendMediaInputDto
            ->getMediaMessageDto()
            ->getMediaFile()
            ->store("media/{$sendMediaInputDto->getLeaderId()}", 'public');

        // Gerar a URL pública para a mídia
        $mediaUrl = Storage::disk('public')->url($path);
        
        $mediaMessage = MediaMessageFactory::createWithUrl(
            mediaType: $sendMediaInputDto->getMediaMessageDto()->getMediaType(),
            media: $sendMediaInputDto->getMediaMessageDto()->getMediaFile(),
            mediaUrl: $mediaUrl,
            caption: $sendMediaInputDto->getMediaMessageDto()->getCaption(),
        );
        $mediaMessage->setMediaFile(null); // para poder dispachar na fila

        // buscar todos os eleitores de um leader_id
        $voters = $this->leaderService->findById($sendMediaInputDto->getLeaderId())->voters()->get();

        // criar jobs para batch dispatch
        $jobs = $voters->map(function ($voter) use ($mediaMessage) {
            return new SendMediaWithUrlJob($voter->phone, $mediaMessage);
        })->toArray();

        // despachar jobs em batch
        Bus::batch($jobs)->dispatch();

        $result = [
            'leader_id' => $sendMediaInputDto->getLeaderId(),
            'total_voters' => $voters->count(),
            'media_type' => $sendMediaInputDto->getMediaMessageDto()->getMediaType(),
            'caption' => $sendMediaInputDto->getMediaMessageDto()->getCaption()
        ];

        Log::info('MENSAGENS_ENVIADAS_PARA_FILA', $result);

        return $result;
    }

    /**
     * @param SendMediaInputDto $sendMediaInputDto
     * @return array
     * @throws ConnectionIsNotOpenException
     * @throws \JsonException
     * @throws \Throwable
     */
    public function sendMediaWithBase64ToVoters(SendMediaInputDto $sendMediaInputDto): array
    {
        if (!$this->messageRepository->isInstanceOpen()) {
            Log::error('ERRO_INSTANCIA_ESTA_FECHADA', [
                'leader_id' => $sendMediaInputDto->getLeaderId()
            ]);
            throw new ConnectionIsNotOpenException();
        }

        // buscar todos os eleitores de um leader_id
        $voters = $this->leaderService->findById($sendMediaInputDto->getLeaderId())->voters()->get();

        // converter midia em base64
        $mediaMessage = MediaMessageFactory::createWithBase64(
            mediaType: $sendMediaInputDto->getMediaMessageDto()->getMediaType(),
            media: $sendMediaInputDto->getMediaMessageDto()->getMediaFile(),
            caption: $sendMediaInputDto->getMediaMessageDto()->getCaption()
        );
        $mediaMessage->setMediaFile(null); // para poder dispachar na fila

        // criar jobs para batch dispatch
        $jobs = $voters->map(function ($voter) use ($mediaMessage) {
            return new SendMediaWithBase64Job($voter->phone, $mediaMessage);
        })->toArray();

        // despachar jobs em batch
        Bus::batch($jobs)->dispatch();

        $result = [
            'leader_id' => $sendMediaInputDto->getLeaderId(),
            'total_voters' => $voters->count(),
            'media_type' => $sendMediaInputDto->getMediaMessageDto()->getMediaType(),
            'caption' => $sendMediaInputDto->getMediaMessageDto()->getCaption()
        ];

        Log::info('MENSAGENS_ENVIADAS_PARA_FILA', $result);

        return $result;
    }
}
