<?php

namespace App\Dto\Message\SendMedia;

use App\Enum\MediaTypeEnum;
use App\Http\Requests\Message\SendMediaRequest;

class SendMediaInputDto
{
    public function __construct(
        private int             $leaderId,
        private MediaMessageDto $mediaMessageDto
    )
    {
    }

    /**
     * @param SendMediaRequest $request
     * @return SendMediaInputDto
     */
    public static function makeFromRequest(SendMediaRequest $request): SendMediaInputDto
    {
        return new self(
            leaderId: $request->leader_id,
            mediaMessageDto: MediaMessageDto::create(
                mediaType: MediaTypeEnum::from($request->media_type),
                mediaFile: $request->media,
                caption: $request->text_message ?? '',
            )
        );
    }

    public function getLeaderId(): int
    {
        return $this->leaderId;
    }

    public function getMediaMessageDto(): MediaMessageDto
    {
        return $this->mediaMessageDto;
    }
}
