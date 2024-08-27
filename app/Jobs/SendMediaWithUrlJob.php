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

class SendMediaWithUrlJob implements ShouldQueue
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
        $messageRepository->sendMedia($this->phoneNumber, $this->mediaMessageDto);
    }
}
