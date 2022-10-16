<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Word extends Model
{
    protected $table = 'words';

    protected $fillable = ['user_id', 'en', 'pl', 'es', 'ge', 'status', 'last_time_tested'];

    public function illustration(){
        return $this->hasOne('App\WordIllustration', 'word_id');
    }
}
