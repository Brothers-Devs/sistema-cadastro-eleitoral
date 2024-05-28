<?php

namespace App\Http\Controllers;

use App\Services\VoterService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class VoterController extends Controller
{
    public function __construct(
        protected VoterService $voterService
    ) {
    }

    public function list()
    {
        $itens = $this->voterService->all();

        return Inertia::render('Voters/Voters', ['itens' => $itens]);
    }
}
