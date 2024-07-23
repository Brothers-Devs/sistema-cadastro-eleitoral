<?php

namespace App\Exceptions\EvolutionApi;

use Exception;
use Symfony\Component\HttpFoundation\Response;
use Throwable;

class ConnectionIsNotOpenException extends Exception
{
    public function __construct(
        string     $message = 'Ocorreu um erro. A conexão com a instância não está aberta.
        Por favor, entre em contato com o suporte.',
        int        $code = Response::HTTP_UNPROCESSABLE_ENTITY,
        ?Throwable $previous = null
    )
    {
        parent::__construct($message, $code, $previous);
    }
}
