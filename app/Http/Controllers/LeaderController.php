<?php

namespace App\Http\Controllers;

use App\Services\LeaderService;
use Inertia\Inertia;
use Inertia\Response;

class LeaderController extends Controller
{
    public function __construct(
        public LeaderService $leaderService
    )
    {
    }

    public function list(): Response
    {
        $items = $this->leaderService->all();

        return Inertia::render('Leaders/Leaders', ['items' => $items]);
    }
}
