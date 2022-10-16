<?php

namespace App;

// use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Translation extends Model
{
    // use HasFactory;

    protected $fillable = [
        'language_name', 'title', 'translation'
    ];

    protected $table = 'translations';

    
}
