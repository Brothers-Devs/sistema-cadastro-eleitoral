<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LeaderController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\VoterController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Login
Route::get('/', [AuthenticatedSessionController::class, 'create'])->name('login.index');

Route::middleware(['auth', 'verified'])->group(function () {
    //Home
    Route::get('/home', [HomeController::class, 'index'])->name('home');

    //Eleitores
    Route::get('/voters', [VoterController::class, 'list'])->name('voters.list');
    Route::post('/voters', [VoterController::class, 'create'])->name('voters.create');
    Route::put('/voters/{id}', [VoterController::class, 'update'])->name('voters.update');
    Route::get('/voters/{id}/edit', [VoterController::class, 'edit'])->name('voters.edit');
    Route::delete('/voters/{id}', [VoterController::class, 'delete'])->name('voters.delete');

    //Lideranças
    Route::get('/leaders', [LeaderController::class, 'list'])->name('leaders.list');
    Route::post('/leaders', [LeaderController::class, 'create'])->name('leaders.create');
    Route::put('/leaders/{id}', [LeaderController::class, 'update'])->name('leaders.update');
    Route::get('/leaders/{id}/edit', [LeaderController::class, 'edit'])->name('leaders.edit');
    Route::delete('/leaders/{id}', [LeaderController::class, 'delete'])->name('leaders.delete');

    //Envio de mensagens
    Route::get('/messages', [MessageController::class, 'index'])->name('message.index');
    Route::get('/messages/send-media', [MessageController::class, 'sendWithMedia'])->name('message.send.media');
});

require __DIR__ . '/auth.php';
