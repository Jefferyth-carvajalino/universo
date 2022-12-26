<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class HandlerController extends Controller
{
    //
    public function perfil(){
        $backpack = [];
        return  view('customer.viewPerfil.index',$backpack);
    }

    public function miHoroscopo(){
        $backpack = [];
        return  view('customer.viewMiHoroscopo.index',$backpack);
    }

    public function horoscopo(){
        $backpack = [];
        return  view('customer.viewHoroscopo.index',$backpack);
    }

    public function misCompras(){
        $backpack = [];
        return view('customer.viewMisCompras.index',$backpack);
    }

    public function comprarPaquetes(){
        $backpack = [];
        return view('customer.viewComprarPaquetes.index',$backpack);
    }

    public function escogerAsesor(){
        $backpack = [];
        return view('customer.viewEscogerAsesor.index',$backpack);
    }
}
