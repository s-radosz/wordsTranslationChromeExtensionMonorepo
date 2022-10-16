<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserLevelsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $userLevels = [
            "początkujący",
            "średnio-zaawansowany",
            "zaawansowany"
        ];

        foreach ($userLevels as $level) {
            if (!DB::table('user_levels')->where('level', $level)->exists()) {
                DB::table('user_levels')->insert([
                    'level' => $level
                ]);
            }
          }
    }
}
