<?php

declare(strict_types=1);

namespace App\Dto\Leader;

use App\Http\Requests\StoreUpdateLeaderRequest;

class CreateLeaderDto
{
    public function __construct(
        public string $name,
        public string $cpf
    ) {
    }

    public static function makeFromRequest(StoreUpdateLeaderRequest $request): CreateLeaderDto
    {
        return new self(
            name: $request->leader_name,
            cpf: $request->leader_cpf
        );
    }

    public static function makeFromArray(array $data): CreateLeaderDto
    {
        return new self(
            name: $data['leader_name'],
            cpf: $data['leader_cpf']
        );
    }

    public function toArray(): array
    {
        return [
            'name' => $this->name,
            'cpf' => $this->cpf,
        ];
    }
}
