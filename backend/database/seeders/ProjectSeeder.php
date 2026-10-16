<?php

namespace Database\Seeders;

use App\Models\Project;
use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    public function run(): void
    {
        $projects = [
            [
                'slug' => 'free-tax-protest',
                'title' => 'Free Tax Protest',
                'category' => 'Client Property-Tax Platform',
                'summary' => 'A property-tax compensation platform serving Denton and Tarrant county workflows, now moving to a FastAPI and React stack with a large-scale ETL pipeline.',
                'highlights' => [
                    'Automating ETL for 20 raw files (50+ GB, 8.4M+ records, 500+ columns) with DuckDB, Parquet/JSONL and PostgreSQL; a run now completes in about 6 minutes.',
                    'Migrating to FastAPI (Python) and React.js (TypeScript) with custom cookie-based authentication, RBAC, and admin/user features.',
                    'Dockerized the app and migrated the Laravel Blade/Vue.js admin panel to a Laravel REST API with a React.js (TypeScript) frontend.',
                    'Moved file storage to Amazon S3, integrated SendGrid SMTP, and migrated 70+ email templates to dynamic templates.',
                    'Implemented OAuth SSO (Laravel Passport) for user/admin switching across county workflows.',
                ],
                'technologies' => ['Laravel', 'React', 'TypeScript', 'FastAPI', 'DuckDB', 'PostgreSQL', 'Docker', 'AWS S3', 'SendGrid'],
                'live_url' => 'https://freetaxprotest.com',
                'period' => '2025 - 2026',
                'is_featured' => true,
            ],
            [
                'slug' => 'duskbyte-workspace',
                'title' => 'Duskbyte Workspace',
                'category' => 'Internal Workspace & Ticketing Platform',
                'summary' => 'Designed and built end to end, from architecture and database to production deployment, and used daily by the team.',
                'highlights' => [
                    'Replaced scattered task tracking across chats with centralized ticketing, assignment and status tracking.',
                    'Added ticket status views so team progress is visible at a glance without follow-up messages.',
                ],
                'technologies' => ['Next.js', 'TypeScript', 'Laravel', 'PostgreSQL'],
                'live_url' => 'https://workspace.duskbyteapps.com',
                'period' => null,
                'is_featured' => true,
            ],
            [
                'slug' => 'itwin-ai',
                'title' => 'Itwin.ai',
                'category' => 'AI Short-Form Video Platform',
                'summary' => 'A platform that generates TikTok-style reels from prompts and publishes them to social channels.',
                'highlights' => [
                    'Built and deployed a Laravel and Vue.js (TypeScript) platform; Dockerized it during a Laravel upgrade.',
                    'Integrated GPT-generated search queries with Pexels, Shotstack (video editing), HeyGen (text-to-speech), and Instagram/YouTube/Facebook publishing APIs.',
                ],
                'technologies' => ['Laravel', 'Vue.js', 'TypeScript', 'OpenAI', 'Shotstack', 'HeyGen', 'Docker'],
                'live_url' => 'https://itwin.duskbyteapps.com',
                'period' => null,
                'is_featured' => true,
            ],
            [
                'slug' => 'beatmyticket',
                'title' => 'BeatMyTicket',
                'category' => 'Vehicle Challan Management',
                'summary' => 'Challan management powered by the Gemini API, with Zoho CRM for leads and Stripe for payments.',
                'highlights' => [],
                'technologies' => ['Gemini API', 'Zoho CRM', 'Stripe'],
                'live_url' => 'https://ticketresolver.com',
                'period' => null,
                'is_featured' => false,
            ],
            [
                'slug' => 'performant-365-cre',
                'title' => 'Performant 365 CRE',
                'category' => 'Roster & Subscription Platform',
                'summary' => 'Microsoft login, roster management built with the service-repository pattern, and Braintree subscriptions.',
                'highlights' => [],
                'technologies' => ['Laravel', 'Microsoft Login', 'Braintree'],
                'live_url' => 'https://365cre.com',
                'period' => null,
                'is_featured' => false,
            ],
            [
                'slug' => 'lead-intake-workflow',
                'title' => 'Lead Intake Workflow',
                'category' => 'Lead Management App',
                'summary' => 'A Dockerized Next.js app with Supabase and Airtable, featuring advanced lead filtering.',
                'highlights' => [],
                'technologies' => ['Next.js', 'TypeScript', 'Supabase', 'Airtable', 'Docker'],
                'live_url' => 'https://duskbyteapps.com/lead-intake-workflow',
                'period' => null,
                'is_featured' => false,
            ],
            [
                'slug' => 'db-monitoring-tool',
                'title' => 'DB Monitoring Tool',
                'category' => 'Proof of Concept',
                'summary' => 'Studied the monitoring architecture and built a Go agent to the requirements (AI-assisted), processing time-series data with InfluxDB and showing charts, graphs, and tables in React dashboards.',
                'highlights' => [],
                'technologies' => ['Go', 'InfluxDB', 'React', 'TypeScript'],
                'live_url' => null,
                'period' => null,
                'is_featured' => false,
            ],
        ];

        foreach ($projects as $index => $project) {
            Project::query()->updateOrCreate(
                ['slug' => $project['slug']],
                [...$project, 'sort_order' => $index]
            );
        }
    }
}
