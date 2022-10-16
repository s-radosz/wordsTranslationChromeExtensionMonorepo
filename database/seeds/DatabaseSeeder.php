<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(LanguageSeeder::class);
        // $this->call(TranslationSeeder::class);
        // $this->call(UserLevelsSeeder::class);

        $this->call([
            LanguageSeeder::class, 
            TranslationSeeder::class, 
            UserLevelsSeeder::class
        ]);
    }
}
