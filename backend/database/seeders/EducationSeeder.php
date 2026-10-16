<?php

namespace Database\Seeders;

use App\Models\Education;
use Illuminate\Database\Seeder;

class EducationSeeder extends Seeder
{
    public function run(): void
    {
        Education::query()->updateOrCreate(
            ['degree' => 'Bachelor of Computer Applications (BCA)'],
            [
                'institution' => 'Chandigarh Group of Colleges, Landran',
                'started_on' => '2019-08-01',
                'ended_on' => '2022-08-31',
                'grade' => 'GPA 7.77',
            ]
        );
    }
}
