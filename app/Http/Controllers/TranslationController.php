<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Translation;

class TranslationController extends Controller
{
    public function getTranslations(Request $request) {
        $languageName = $request->languageName;

        $translations = Translation::where('language_name', $languageName)
                                ->get(['title', 'translation']);

        return $translations;
    }
}
