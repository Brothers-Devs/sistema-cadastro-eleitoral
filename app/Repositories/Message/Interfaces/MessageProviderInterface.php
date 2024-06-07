<?php

namespace App\Repositories\Message\Interfaces;

use App\Dto\Message\SendMedia\MediaMessageDto;

interface MessageProviderInterface
{
    public function sendMedia(string $phoneNumber, MediaMessageDto $mediaMessageDto): array;
}
