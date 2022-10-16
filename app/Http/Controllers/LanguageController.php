<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Language;

class LanguageController extends Controller
{
    public function index() {
        $languages = Language::all();

        return $languages;
    }
}
