<?php

declare(strict_types=1);

namespace App\Services;

use App\Dto\Message\SendMedia\MediaMessageFactory;
use App\Dto\Message\SendMedia\SendMediaInputDto;
use App\Repositories\Message\Interfaces\MessageProviderInterface;

class MessageService
{
    public function __construct(
        protected MessageProviderInterface $messageRepository,
        protected LeaderService            $leaderService
    )
    {
    }

    public function sendMediaToVoters(SendMediaInputDto $sendMediaInputDto): array
    {
        // buscar todos os eleitores de um leader_id
        $voters = $this->leaderService->findById($sendMediaInputDto->getLeaderId())->voters();

        // converter midia em base64
        $mediaMessage = MediaMessageFactory::createWithBase64(
            mediaType: $sendMediaInputDto->getMediaMessageDto()->getMediaType(),
            media: $sendMediaInputDto->getMediaMessageDto()->getMedia(),
            caption: $sendMediaInputDto->getMediaMessageDto()->getCaption()
        );

        // enviar mensagem para os eleitores
        $totalSuccess = $totalFailed = 0;
        foreach ($voters->get() as $voter) {
            $result = $this->messageRepository->sendMedia($voter->phone, $mediaMessage);

            if (!$result['success']) {
                $totalFailed++;
                continue;
            }
            $totalSuccess++;
        }

        return [
            'total_voters' => $voters->count(),
            'total_success' => $totalSuccess,
            'total_failed' => $totalFailed,
        ];
    }
}
