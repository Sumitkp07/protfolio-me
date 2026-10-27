<?php

namespace Database\Seeders;

use App\Models\SkillCategory;
use Illuminate\Database\Seeder;

class SkillCategorySeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            'Frontend & JavaScript' => ['JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Vue.js'],
            'Backend & APIs' => ['REST APIs', 'Laravel', 'PHP', 'Python/FastAPI (learning)', 'Swagger'],
            'Databases' => ['MySQL', 'PostgreSQL', 'DuckDB', 'Supabase'],
            'Auth & Security' => ['OAuth/SSO (Laravel Passport)', 'Cookie-based auth', 'RBAC'],
            'DevOps & Cloud' => ['Docker', 'Linux server deployment (SSH)', 'Git', 'AWS S3'],
            'Testing' => ['Postman', 'Mailtrap'],
            'Integrations' => ['OpenAI GPT', 'Gemini', 'Stripe', 'Braintree', 'Zoho CRM', 'SendGrid', 'YouTube/Facebook/Instagram APIs'],
            'Interpersonal' => ['Mentoring', 'Communication', 'Team collaboration', 'Problem-solving', 'Ownership'],
        ];

        $order = 0;

        foreach ($categories as $name => $skills) {
            SkillCategory::query()->updateOrCreate(
                ['name' => $name],
                ['skills' => $skills, 'sort_order' => $order++]
            );
        }
    }
}
