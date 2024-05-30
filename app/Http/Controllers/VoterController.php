<?php

namespace App\Http\Controllers;

use App\Dto\Voter\CreateVoterDto;
use App\Dto\Voter\UpdateVoterDto;
use App\Http\Requests\StoreUpdateVoterRequest;
use App\Services\VoterService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class VoterController extends Controller
{
    public function __construct(
        protected VoterService $voterService
    )
    {
    }
    public function edit(int $id){
        $voter = $this->voterService->findById($id);
        
        return Inertia::render("Voters/Edit",["voter" => $voter]);
    }

    public function list(): Response
    {
        $items = $this->voterService->all();

        return Inertia::render('Voters/Voters', ['items' => $items]);
    }

    public function findById(int $id): JsonResponse
    {
        $voter = $this->voterService->findById($id);

        return response()->json($voter);
    }

    public function create(StoreUpdateVoterRequest $request): RedirectResponse
    {
        $this->voterService->create(CreateVoterDto::makeFromRequest($request));

        return Redirect::route('voters.list')
            ->with([
                'success' => true,
                'message' => 'Eleitor cadastrado com sucesso.'
            ]);
    }

    /**
     * @param StoreUpdateVoterRequest $request
     * @param int $id
     * @return RedirectResponse
     */
    public function update(StoreUpdateVoterRequest $request, int $id): RedirectResponse
    {
        $this->voterService->update(UpdateVoterDto::makeFromRequest($request, $id));

        return Redirect::route('voters.list')
            ->with([
                'success' => true,
                'message' => 'Eleitor atualizado com sucesso.'
            ]);
    }

    public function delete(int $id): RedirectResponse
    {
        if (!$this->voterService->findById($id)) {
            Redirect::route('voters.list')
                ->with([
                    'success' => false,
                    'message' => 'Eleitor não encontrado.'
                ]);
        }

        $this->voterService->delete($id);

        return Redirect::route('voters.list')
            ->with([
                'success' => true,
                'message' => 'Eleitor excluído com sucesso.'
            ]);
    }
}
