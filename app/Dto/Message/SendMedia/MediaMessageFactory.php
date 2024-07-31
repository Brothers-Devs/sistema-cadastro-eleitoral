<?php

namespace App\Dto\Message\SendMedia;

use App\Enum\MediaTypeEnum;
use Illuminate\Http\UploadedFile;

class MediaMessageFactory
{
    /**
     * @param MediaTypeEnum $mediaType
     * @param UploadedFile $media
     * @param string|null $caption
     * @return MediaMessageDto
     */
    public static function createWithBase64(
        MediaTypeEnum $mediaType,
        UploadedFile  $media,
        ?string       $caption = ''
    ): MediaMessageDto
    {
        $mediaInBase64 = self::convertMediaToBase64($media);

        return new MediaMessageDto($mediaType, $media, $caption, $mediaInBase64);
    }

    /**
     * @param UploadedFile $media
     * @return string
     */
    protected static function convertMediaToBase64(UploadedFile $media): string
    {
        $mediaPath = $media->getRealPath();
        $mediaData = file_get_contents($mediaPath);
        return base64_encode($mediaData);
    }
}
