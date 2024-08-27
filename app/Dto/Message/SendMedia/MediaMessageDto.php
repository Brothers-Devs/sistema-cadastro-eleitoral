<?php

namespace App\Dto\Message\SendMedia;

use App\Enum\MediaTypeEnum;
use Illuminate\Http\UploadedFile;

class MediaMessageDto
{
    public function __construct(
        private readonly MediaTypeEnum $mediaType,
        private ?UploadedFile          $mediaFile,
        private readonly string        $media,
        private readonly ?string       $caption,
    )
    {
    }

    public static function create(
        MediaTypeEnum $mediaType,
        UploadedFile  $mediaFile,
        string        $media = '',
        string        $caption = '',
    ): MediaMessageDto
    {
        return new self($mediaType, $mediaFile, $media, $caption);
    }

    public function setMediaFile(?UploadedFile $mediaFile): void
    {
        $this->mediaFile = $mediaFile;
    }

    public function getMediaType(): MediaTypeEnum
    {
        return $this->mediaType;
    }

    public function getMediaFile(): ?UploadedFile
    {
        return $this->mediaFile;
    }

    public function getCaption(): ?string
    {
        return $this->caption;
    }

    public function getMedia(): ?string
    {
        return $this->media;
    }

    public function toArray(): array
    {
        return [
            'media_type' => $this->getMediaType()->value,
            'media_file' => $this->getMediaFile(),
            'caption' => $this->getCaption(),
            'media' => $this->getMedia(),
        ];
    }
}
