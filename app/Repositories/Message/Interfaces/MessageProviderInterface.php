<?php

namespace App\Repositories\Message\Interfaces;

use App\Dto\Message\SendMedia\MediaMessageDto;

interface MessageProviderInterface
{
    public function getConnectionState(): array;

    public function sendMedia(string $phoneNumber, MediaMessageDto $mediaMessageDto): array;
}
