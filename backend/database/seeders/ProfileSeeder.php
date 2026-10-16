<?php

namespace Database\Seeders;

use App\Models\Profile;
use Illuminate\Database\Seeder;

class ProfileSeeder extends Seeder
{
    public function run(): void
    {
        Profile::query()->updateOrCreate(
            ['email' => 'sumitkp.dev@gmail.com'],
            [
                'name' => 'Sumit Kumar',
                'title' => 'Full Stack Developer',
                'tagline' => 'I build and ship production web platforms, from database design to Docker deployment.',
                'summary' => 'Full Stack Developer with about 2 years of experience at Duskbyte, building and deploying production web applications with React.js, Next.js (TypeScript), Laravel, and PostgreSQL. Delivered projects end to end, from architecture and database design to Docker-based deployment, with experience in REST APIs, authentication, ETL pipelines, and third-party and AI API integrations.',
                'phone' => '+91 9050755520',
                'location' => 'Mohali, Punjab, India',
                'github_url' => 'https://github.com/Sumitkp07',
                'linkedin_url' => 'https://linkedin.com/in/sumit-kumar06-110386220',
                'resume_url' => null,
                'years_experience' => 2,
            ]
        );
    }
}
