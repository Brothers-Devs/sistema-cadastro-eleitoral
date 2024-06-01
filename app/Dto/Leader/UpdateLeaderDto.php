<?php

declare(strict_types=1);

namespace App\Dto\Leader;

use App\Http\Requests\StoreUpdateLeaderRequest;

class UpdateLeaderDto
{
    public function __construct(
        public int    $id,
        public string $name,
        public string $cpf
    )
    {
    }

    /**
     * @param StoreUpdateLeaderRequest $request
     * @param int $id
     * @return UpdateLeaderDto
     */
    public static function makeFromRequest(StoreUpdateLeaderRequest $request, int $id): UpdateLeaderDto
    {
        return new self(
            id: $id,
            name: $request->name,
            cpf: self::removeMask($request->cpf)
        );
    }

    protected static function removeMask(string $value): array|string|null
    {
        return preg_replace('/\D/', '', $value);
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'cpf' => $this->cpf,
        ];
    }
}
