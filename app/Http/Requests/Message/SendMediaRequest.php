<?php

namespace App\Http\Requests\Message;

use App\Enum\MediaTypeEnum;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\File;

class SendMediaRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'leader_id' => 'required|integer|exists:leaders,id',
            'media_type' => [
                'required',
                Rule::enum(MediaTypeEnum::class)
            ],
            'text_message' => 'nullable|string',
            'media' => [
                'required',
                File::types(['jpeg', 'jpg', 'png', 'mp4'])
                    ->when($this->isImage(), function ($file) {
                        return $file->max(5120); // 5 MB para imagens
                    })
                    ->when($this->isVideo(), function ($file) {
                        return $file->max(16384); // 16 MB para vídeos
                    }),
            ]
        ];
    }

    protected function isImage(): bool
    {
        $mediaType = $this->input('media_type');
        return in_array($mediaType, ['jpeg', 'jpg', 'png']);
    }

    protected function isVideo(): bool
    {
        $mediaType = $this->input('media_type');
        return $mediaType === 'mp4';
    }
}
