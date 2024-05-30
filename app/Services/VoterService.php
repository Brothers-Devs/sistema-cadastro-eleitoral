<?php

declare(strict_types=1);

namespace App\Services;

use App\Dto\Leader\CreateLeaderDto;
use App\Dto\Voter\CreateVoterDto;
use App\Dto\Voter\UpdateVoterDto;
use App\Models\Leader;
use App\Repositories\LeaderRepository;
use App\Repositories\VoterRepository;
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
            $leader = $this->leaderRepository->model->firstOrCreate(
                ['cpf' => $createVoterDto->leader->cpf],
                $createVoterDto->leader->toArray()
            );
            $voter = $leader->voters()->create($createVoterDto->toArray());

            return $voter->with('leader')->get();
        });
    }

    public function update(UpdateVoterDto $updateVoterDto)
    {
        return DB::transaction(function () use ($updateVoterDto) {
            /** @var Leader $leader */
            $leader = $this->leaderRepository->findByCpf($updateVoterDto->leader->cpf);

            if ($leader) {
                $leaderOld = $leader;
                $leader->update($updateVoterDto->leader->toArray());
                Log::info(
                    'LIDER_ATUALIZADO',
                    [
                        'old' => $leaderOld->toArray(),
                        'new' => $leader->toArray(),
                    ]
                );
            } else {
                /** @var Leader $leader */
                $leader = $this->leaderRepository->create(
                    CreateLeaderDto::makeFromArray([
                        'leader_name' => $updateVoterDto->leader->name,
                        'leader_cpf' => $updateVoterDto->leader->cpf,
                    ])
                );
                Log::info('LIDER_CADASTRADO', $leader->toArray());
            }

            if ($voter = $this->voterRepository->findById($updateVoterDto->id)) {
                $voterOld = $voter;
                $data = $updateVoterDto->toArray();
                $data['leader_id'] = $leader->id;
                $voter->update($data);
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
