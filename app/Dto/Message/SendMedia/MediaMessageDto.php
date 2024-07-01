<?php

namespace App\Dto\Message\SendMedia;

use App\Enum\MediaTypeEnum;
use Illuminate\Http\UploadedFile;

class MediaMessageDto
{
    public function __construct(
        private readonly MediaTypeEnum $mediaType,
        private readonly UploadedFile  $media,
        private readonly ?string       $caption,
        private readonly ?string       $mediaInBase64,
    )
    {
    }

    public static function create(
        MediaTypeEnum $mediaType,
        UploadedFile  $media,
        ?string       $caption,
        ?string       $mediaInBase64 = null
    ): MediaMessageDto
    {
        return new self($mediaType, $media, $caption, $mediaInBase64);
    }

    public function getMediaType(): MediaTypeEnum
    {
        return $this->mediaType;
    }

    public function getMedia(): UploadedFile
    {
        return $this->media;
    }

    public function getCaption(): ?string
    {
        return $this->caption;
    }

    public function getMediaInBase64(): ?string
    {
        return $this->mediaInBase64;
    }

    public function toArray(): array
    {
        return [
            'media_type' => $this->getMediaType()->value,
            'media' => $this->getMedia(),
            'caption' => $this->getCaption(),
            'media_in_base64' => $this->getMediaInBase64(),
        ];
    }
}
