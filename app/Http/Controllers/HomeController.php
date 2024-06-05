<?php

namespace App\Http\Controllers;

use App\Services\HomeService;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function __construct(
        protected HomeService $homeService
    ) {
    }

    public function index(): Response
    {
        $total = $this->homeService->total();

        return Inertia::render('Home', [
            'total' => $total
        ]);
    }
}
