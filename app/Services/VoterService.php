<?php

declare(strict_types=1);

namespace App\Services;

use App\Dto\Voter\CreateVoterDto;
use App\Dto\Voter\UpdateVoterDto;
use App\Models\Leader;
use App\Repositories\LeaderRepository;
use App\Repositories\VoterRepository;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class VoterService
{
    public function __construct(
        protected VoterRepository  $voterRepository,
        protected LeaderRepository $leaderRepository
    )
    {
    }

    public function all()
    {
        return $this->voterRepository->all();
    }

    public function findById(int $id)
    {
        return $this->voterRepository->findById($id);
    }

    public function create(CreateVoterDto $createVoterDto)
    {
        return DB::transaction(function () use ($createVoterDto) {
            $leader = $this->leaderRepository->findById($createVoterDto->leaderId);

            if (!$leader) {
                Log::error(
                    'LIDER_NAO_ENCONTRADO',
                    [
                        'flow' => 'CADASTRAR_ELEITOR',
                        'leader_id' => $createVoterDto->leaderId,
                    ]
                );
                throw new ModelNotFoundException(
                    sprintf('Liderança com ID: %s não encontrada', $createVoterDto->leaderId)
                );
            }

            $voter = $this->voterRepository->create($createVoterDto);

            return $voter->with('leader')->get();
        });
    }

    public function update(UpdateVoterDto $updateVoterDto)
    {
        return DB::transaction(function () use ($updateVoterDto) {
            /** @var Leader $leader */
            $leader = $this->leaderRepository->findById($updateVoterDto->leaderId);
            if (!$leader) {
                Log::error(
                    'LIDER_NAO_ENCONTRADO',
                    [
                        'flow' => 'ATUALIZAR_ELEITOR',
                        'leader_id' => $updateVoterDto->leaderId,
                    ]
                );
                throw new ModelNotFoundException(
                    sprintf('Liderança com ID: %s não encontrada', $updateVoterDto->leaderId)
                );
            }

            if ($voter = $this->voterRepository->findById($updateVoterDto->id)) {
                $voterOld = $voter;
                $voter->update($updateVoterDto->toArray());
                $voter->refresh();
                Log::info(
                    'ELEITOR_ATUALIZADO',
                    [
                        'old' => $voterOld->toArray(),
                        'new' => $voter->toArray(),
                    ]
                );
            }
        });
    }

    /**
     * @param int $id
     * @return void
     */
    public function delete(int $id): void
    {
        $this->voterRepository->delete($id);
    }
}
