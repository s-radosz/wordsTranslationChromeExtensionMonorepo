<?php

namespace App;

// use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Language extends Model
{
    // use HasFactory;

    protected $fillable = [
        'name', 'long_name', 'img_src'
    ];

    protected $table = 'languages';
}
