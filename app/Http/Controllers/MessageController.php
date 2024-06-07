<?php

namespace App\Http\Controllers;

use App\Dto\Message\SendMedia\SendMediaInputDto;
use App\Http\Requests\Message\SendMediaRequest;
use App\Services\LeaderService;
use App\Services\MessageService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
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

    /**
     * @param SendMediaRequest $request
     * @return RedirectResponse
     */
    public function sendMedia(SendMediaRequest $request): RedirectResponse
    {
        $result = $this->messageService->sendMediaToVoters(SendMediaInputDto::makeFromRequest($request));

        return Redirect::route('messages.index')
            ->with([
                'result' => $result
            ]);
    }
}
