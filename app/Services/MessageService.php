<?php

declare(strict_types=1);

namespace App\Services;

use App\Dto\Message\SendMedia\MediaMessageFactory;
use App\Dto\Message\SendMedia\SendMediaInputDto;
use App\Exceptions\EvolutionApi\ConnectionIsNotOpenException;
use App\Jobs\SendMediaJob;
use App\Repositories\Message\Interfaces\MessageProviderInterface;
use Illuminate\Support\Facades\Log;

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

        // buscar todos os eleitores de um leader_id
        $voters = $this->leaderService->findById($sendMediaInputDto->getLeaderId())->voters();

        // converter midia em base64
        $mediaMessage = MediaMessageFactory::createWithBase64(
            mediaType: $sendMediaInputDto->getMediaMessageDto()->getMediaType(),
            media: $sendMediaInputDto->getMediaMessageDto()->getMedia(),
            caption: $sendMediaInputDto->getMediaMessageDto()->getCaption()
        );
        $mediaMessage->setMedia(null); // para poder dispachar na fila

        // enviar mensagens para a fila
        foreach ($voters->get() as $voter) {
            SendMediaJob::dispatch($voter->phone, $mediaMessage);
        }

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
