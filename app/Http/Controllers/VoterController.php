<?php

namespace App\Http\Controllers;

use App\Dto\Voter\CreateVoterDto;
use App\Http\Requests\StoreUpdateVoterRequest;
use App\Services\VoterService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class VoterController extends Controller
{
    public function __construct(
        protected VoterService $voterService
    ) {
    }

    public function list(): Response
    {
        $items = $this->voterService->all();

        return Inertia::render('Voters/Voters', ['items' => $items]);
    }

    public function findById(int $id): Response
    {
        $voter = $this->voterService->findById($id);
        return Inertia::render('Voters/Voter', ['voter' => $voter]);
    }

    public function create(StoreUpdateVoterRequest $request): RedirectResponse
    {
        $this->voterService->create(CreateVoterDto::makeFromRequest($request));

        return Redirect::route('voters.list')->with('message', 'Eleitor cadastrado com sucesso!');
    }
}
