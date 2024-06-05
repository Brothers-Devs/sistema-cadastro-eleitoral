<?php

namespace App\Providers;

use App\Repositories\Message\Interfaces\MessageProviderInterface;
use App\Repositories\Message\Providers\WhatsappRepository;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(MessageProviderInterface::class, WhatsappRepository::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
