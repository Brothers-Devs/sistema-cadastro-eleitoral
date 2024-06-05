<?php

declare(strict_types=1);

namespace App\Services;

use App\Repositories\Message\Interfaces\MessageProviderInterface;

class MessageService
{
    public function __construct(
        protected MessageProviderInterface $messageRepository
    )
    {
    }

    public function send(): bool
    {
        return $this->messageRepository->send();
    }
}
