<?php

namespace Database\Seeders;

use App\Models\SkillCategory;
use Illuminate\Database\Seeder;

class SkillCategorySeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            'Core Stack' => ['JavaScript', 'TypeScript', 'React.js', 'Next.js', 'PHP', 'Laravel', 'REST APIs', 'MySQL', 'PostgreSQL'],
            'DevOps & Cloud' => ['Docker', 'Linux server deployment (SSH)', 'Git', 'AWS S3'],
            'Backend & Security' => ['OAuth/SSO (Laravel Passport)', 'Cookie-based auth', 'RBAC', 'Swagger'],
            'Testing' => ['Postman', 'Mailtrap'],
            'Working Knowledge' => ['Vue.js', 'Python/FastAPI', 'DuckDB', 'Supabase'],
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
