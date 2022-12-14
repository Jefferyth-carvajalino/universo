<?php

namespace App\Http\Controllers\Advicer;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class HandlerController extends Controller
{
    //
    public function perfil(){
        $backpack = [];
        return  view('advicer.viewPerfil.index',$backpack);
    }
}
