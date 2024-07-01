<?php

namespace App\Repositories\Message\Providers;

use App\Repositories\Message\Interfaces\MessageProviderInterface;
use Illuminate\Support\Facades\Http;

class WhatsappRepository implements MessageProviderInterface
{
    const BASE_URL = 'http://localhost:8080';
    const INSTANCE = 'evolutionapi';
    const API_KEY = 'cabral951';

    public function send(): bool
    {
        $url = self::BASE_URL . '/message/sendMedia/' . self::INSTANCE;
        //dd($url);
        $response = Http::withHeaders([
            'Content-Type' => 'application/json',
            'apikey' => self::API_KEY,
        ])->post(
            $url,
            [
                'number' => '559182446438@s.whatsapp.net', // remover o numero 9
                'options' => [
                    'delay' => 1200,
                    'presence' => 'composing'
                ],
                "mediaMessage" => [
                    "mediatype" => "image",
                    "caption" => "Envio via aplicação",
                    "media" => "https://evolution-api.com/files/evolution-api.jpg"
                ],
            ]
        );

        dd($response->body());
    }
}
