<?php

namespace App\Http\Controllers;

use App\Services\LeaderService;
use App\Services\MessageService;
use Inertia\Inertia;
use Inertia\Response;

class MessageController extends Controller
{
    public function __construct(
        protected MessageService $messageService,
        protected LeaderService  $leaderService
    )
    {
    }

    /**
     * @return Response
     */
    public function index(): Response
    {
        $leaders = $this->leaderService->all();

        return Inertia::render('SendWhatsapp/SendWhatsapp', [
            'leaders' => $leaders
        ]);
    }

    public function sendWithMedia()
    {
        return $this->messageService->send();
    }
}
