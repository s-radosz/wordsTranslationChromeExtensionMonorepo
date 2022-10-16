<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class WordIllustration extends Model
{
    protected $table = 'words_illustrations';

    protected $fillable = ['word_id', 'base64_image'];
}
