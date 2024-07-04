<?php

namespace App\Exceptions\EvolutionApi;

use Exception;
use Symfony\Component\HttpFoundation\Response;
use Throwable;

class InstanceNotFoundException extends Exception
{
    public function __construct(
        string     $message = 'Ocorreu um erro. Instância não encontrada',
        int        $code = Response::HTTP_UNPROCESSABLE_ENTITY,
        ?Throwable $previous = null
    )
    {
        parent::__construct($message, $code, $previous);
    }
}
