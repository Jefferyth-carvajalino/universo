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

    public function inbox(){
        $backpack = [];
        return  view('advicer.viewInbox.index',$backpack);
    }

    public function misIngresos(){
        $backpack = [];
        return view('advicer.viewMisIngresos.index',$backpack);
    }

    public function horoscopo(){
        $backpack = [];
        return view('advicer.viewHoroscopo.index',$backpack);
    }

    public function chat(){
        $backpack = [];
        return view('advicer.viewChat.index',$backpack);
    }

	public function servicios()
	{
		$backpack = [];
		return view('advicer.viewMisServicios.index', $backpack);
	}
}
