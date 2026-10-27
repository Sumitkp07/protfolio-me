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
                'title' => 'MERN Stack Developer',
                'tagline' => 'I build fast, type-safe React and Next.js applications on top of REST APIs, and ship them to production.',
                'summary' => 'MERN-focused Full Stack Developer with about 2 years of experience at Duskbyte, building and deploying production web applications with JavaScript, TypeScript, React.js and Next.js. I design REST APIs and back them with Laravel, PostgreSQL and MySQL, and I have shipped Docker-based deployments, authentication and RBAC, ETL pipelines, and third-party and AI API integrations end to end.',
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
