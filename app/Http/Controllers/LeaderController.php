<?php

namespace App\Http\Controllers;

use App\Dto\Leader\CreateLeaderDto;
use App\Dto\Leader\UpdateLeaderDto;
use App\Exceptions\LeaderHasVotersException;
use App\Http\Requests\StoreUpdateLeaderRequest;
use App\Services\LeaderService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class LeaderController extends Controller
{
    public function __construct(
        public LeaderService $leaderService
    )
    {
    }

    /**
     * @return Response
     */
    public function list(): Response
    {
        $items = $this->leaderService->all();

        return Inertia::render('Leaders/Leaders', ['items' => $items]);
    }

    /**
     * @param StoreUpdateLeaderRequest $request
     * @return RedirectResponse
     */
    public function create(StoreUpdateLeaderRequest $request): RedirectResponse
    {
        $this->leaderService->create(CreateLeaderDto::makeFromRequest($request));

        return Redirect::route('leaders.list')
            ->with([
                'success' => true,
                'message' => 'Liderança cadastrada com sucesso.'
            ]);
    }

    /**
     * @param int $id
     * @return Response
     */
    public function edit(int $id): Response
    {
        $leader = $this->leaderService->findById($id);
        return Inertia::render('Leaders/Edit', ['leader' => $leader]);
    }

    /**
     * @param StoreUpdateLeaderRequest $request
     * @param int $id
     * @return RedirectResponse
     */
    public function update(StoreUpdateLeaderRequest $request, int $id): RedirectResponse
    {
        $this->leaderService->update(UpdateLeaderDto::makeFromRequest($request, $id));

        return Redirect::route('leaders.list')
            ->with([
                'success' => true,
                'message' => 'Liderança atualizada com sucesso.'
            ]);
    }

    /**
     * @param int $id
     * @return RedirectResponse
     * @throws LeaderHasVotersException
     */
    public function delete(int $id): RedirectResponse
    {
        $this->leaderService->delete($id);

        return Redirect::route('leaders.list')
            ->with([
                'success' => true,
                'message' => 'Liderança excluída com sucesso.'
            ]);
    }
}
