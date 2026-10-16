<?php

namespace Database\Seeders;

use App\Models\Experience;
use Illuminate\Database\Seeder;

class ExperienceSeeder extends Seeder
{
    public function run(): void
    {
        $experiences = [
            [
                'company' => 'Duskbyte',
                'role' => 'Full Stack Developer',
                'location' => 'Mohali, Punjab',
                'started_on' => '2024-11-01',
                'ended_on' => null,
                'highlights' => [
                    'Build and maintain full-stack applications using Laravel, React.js, Next.js (TypeScript), Vue.js, MySQL, PostgreSQL, and REST APIs.',
                    'Dockerize legacy applications and deploy them to Linux production servers over SSH, configuring environments and hosting under the Duskbyte domain.',
                    'Work on a property-tax compensation platform: ETL automation, large-scale data processing, and migration to FastAPI and React.js.',
                    'Mentor 2 trainees on how live projects work and delegate feature work to them on the Workspace platform.',
                    'Evaluate third-party tools, libraries, and architectures against project requirements and recommend options.',
                ],
            ],
            [
                'company' => 'Duskbyte',
                'role' => 'Trainee PHP Developer',
                'location' => 'Mohali, Punjab',
                'started_on' => '2024-05-01',
                'ended_on' => '2024-11-01',
                'highlights' => [
                    'Worked on a Buyer Commission project (Laravel, React.js) and a Chrome extension, building and integrating REST APIs.',
                    'Learned how a production application works end to end, from frontend requests through backend APIs to the database.',
                ],
            ],
            [
                'company' => 'Solitaire Infosys Pvt Ltd',
                'role' => 'Trainee React Developer',
                'location' => 'Mohali, Punjab',
                'started_on' => '2022-09-01',
                'ended_on' => '2023-02-28',
                'highlights' => [
                    'Built Fitness Freak, a front-end-only React.js website, using hooks, state management, and reusable UI components.',
                ],
            ],
        ];

        foreach ($experiences as $index => $experience) {
            Experience::query()->updateOrCreate(
                ['company' => $experience['company'], 'role' => $experience['role']],
                [...$experience, 'sort_order' => $index]
            );
        }
    }
}
