<?php

namespace App\Jobs;

use App\Dto\Message\SendMedia\MediaMessageDto;
use App\Repositories\Message\Interfaces\MessageProviderInterface;
use Illuminate\Bus\Batchable;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;

class SendMediaJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels, Batchable;

    /**
     * Create a new job instance.
     */
    public function __construct(
        protected string          $phoneNumber,
        protected MediaMessageDto $mediaMessageDto
    )
    {
    }

    /**
     * Execute the job.
     */
    public function handle(MessageProviderInterface $messageRepository): void
    {
        try {
            $messageRepository->sendMedia($this->phoneNumber, $this->mediaMessageDto);

            Log::info('SUCESSO_NO_ENVIO_DA_MENSAGEM', [
                'phone' => $this->phoneNumber,
                'media_type' => $this->mediaMessageDto->getMediaType()->value,
                'caption' => $this->mediaMessageDto->getCaption(),
            ]);
        } catch (\Throwable $exception) {
            Log::error(
                'ERRO_NO_ENVIO_DA_MENSAGEM',
                [
                    'phone' => $this->phoneNumber,
                    'media_type' => $this->mediaMessageDto->getMediaType()->value,
                    'caption' => $this->mediaMessageDto->getCaption(),
                    'message' => $exception->getMessage(),
                    'code' => $exception->getCode(),
                    'file' => $exception->getFile(),
                    'trace' => $exception->getTraceAsString(),
                ]
            );
        }
    }
}
