<?php

// namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LanguageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $languages = array(
            ['name' => "en", 'long_name' => 'English', 'img_src' => '/images/flags/en.png', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 
            ['name' => "de", 'long_name' => 'German', 'img_src' => '/images/flags/de.png', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 
            ['name' => "es", 'long_name' => 'Spanish', 'img_src' => '/images/flags/es.png', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 
            ['name' => "fr", 'long_name' => 'French', 'img_src' => '/images/flags/fr.png', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 
            ['name' => "pl", 'long_name' => 'Polish', 'img_src' => '/images/flags/pl.png', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 
        );
        
        foreach ($languages as $language) {
          if (!DB::table('languages')->where('name',$language['name'])->exists()) {
            DB::table('languages')->insert($language);
          }
        }
    }
}
