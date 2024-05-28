<?php

namespace App\Http\Controllers;

use App\Dto\Voter\CreateVoterDto;
use App\Http\Requests\StoreUpdateVoterRequest;
use App\Services\VoterService;
use Illuminate\Support\Facades\Redirect;
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

        return Inertia::render('Eleitores/Eleitores', ['itens' => $itens]);
    }

    public function create(StoreUpdateVoterRequest $request)
    {
        $this->voterService->create(CreateVoterDto::makeFromRequest($request));

        return Redirect::route('voters.list');
    }
}
