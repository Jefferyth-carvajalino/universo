<?php

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

Route::get('/', function () {
	// return view('home');
});


Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::resource('/login', App\Http\Controllers\LoginController::class);
Route::resource('/login-adviser', App\Http\Controllers\LoginAdviserController::class);
Route::resource('/horoscopo', App\Http\Controllers\HoroscopoController::class);
Route::resource('/especialidades', App\Http\Controllers\EspecialidadesController::class);
Route::resource('/especialidadinterno', App\Http\Controllers\EspecialidadesInternoController::class);
Route::resource('/noticias', App\Http\Controllers\NoticiasController::class);
Route::resource('/noticias-interno', App\Http\Controllers\NoticiasInternoController::class);
Route::resource('/descripcion-especialista', App\Http\Controllers\AdviserInternoController::class);
Route::resource('/conocenos', App\Http\Controllers\ConocenosController::class);

Route::prefix('dashboard-especialista')->group(function () {
    Route::get('/perfil',[App\Http\Controllers\Advicer\HandlerController::class,'perfil']);
    Route::get('/inbox',[App\Http\Controllers\Advicer\HandlerController::class,'inbox']);
    Route::get('/mis-ingresos',[App\Http\Controllers\Advicer\HandlerController::class,'misIngresos']);
    Route::get('/horoscopo',[App\Http\Controllers\Advicer\HandlerController::class,'horoscopo']);
    Route::get('/chat',[App\Http\Controllers\Advicer\HandlerController::class,'chat']);
});

Route::prefix('dashboard-consultor')->group(function () {
    Route::get('/perfil',[App\Http\Controllers\Customer\HandlerController::class,'perfil']);
    Route::get('/mi-horoscopo',[App\Http\Controllers\Customer\HandlerController::class,'miHoroscopo']);
    Route::get('/horoscopo',[App\Http\Controllers\Customer\HandlerController::class,'horoscopo']);
    Route::get('/mis-compras',[App\Http\Controllers\Customer\HandlerController::class,'misCompras']);
    Route::get('/paquetes',[App\Http\Controllers\Customer\HandlerController::class,'comprarPaquetes']);
    Route::get('/buscar-asesor',[App\Http\Controllers\Customer\HandlerController::class,'escogerAsesor']);
    Route::get('/chat',[App\Http\Controllers\Customer\HandlerController::class,'chat']);
});

