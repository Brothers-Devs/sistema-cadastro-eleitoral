<?php

declare(strict_types=1);

namespace App\Repositories;

use App\Dto\Voter\CreateVoterDto;
use App\Models\Voter;

class VoterRepository
{
    public function __construct(
        protected Voter $model
    )
    {
    }

    public function all()
    {
        return $this->model::with('leader')->get();
    }

    public function findById(int $id)
    {
        $voter = $this->model::with('leader')->find($id);
        if (!$voter) {
            return null;
        }

        return $voter;
    }

    public function create(CreateVoterDto $createVoterDto): Voter
    {
        return $this->model->create($createVoterDto->toArray());
    }

    /**
     * @param int $id
     * @return void
     */
    public function delete(int $id): void
    {
        $this->model->findOrFail($id)->delete();
    }

    /**
     * Realiza uma pesquisa e retorna resultados paginados de eleitores.
     *
     * @param string $search
     * @param int $perPage
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public function searchAndPaginate(string $search = '', int $perPage = 10)
    {
        $search = $search ?? '';
        $query = $this->model->query();

        if (!empty($search)) {
            $query->where('name', 'like', "%{$search}%")
                  ->orWhere('cpf', 'like', "%{$search}%");
        }

        return $query->paginate($perPage);
    }
}
