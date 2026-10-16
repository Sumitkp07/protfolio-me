<?php

namespace Tests\Feature;

use Database\Seeders\DatabaseSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PortfolioApiTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();

        $this->seed(DatabaseSeeder::class);
    }

    public function test_portfolio_returns_all_sections(): void
    {
        $this->getJson('/api/v1/portfolio')
            ->assertOk()
            ->assertJsonPath('data.profile.name', 'Sumit Kumar')
            ->assertJsonStructure([
                'data' => ['profile', 'experiences', 'projects', 'skill_categories', 'educations'],
            ]);
    }

    public function test_projects_can_be_filtered_by_featured(): void
    {
        $response = $this->getJson('/api/v1/projects?featured=1')->assertOk();

        $this->assertCount(3, $response->json('data'));
    }

    public function test_project_is_found_by_slug(): void
    {
        $this->getJson('/api/v1/projects/free-tax-protest')
            ->assertOk()
            ->assertJsonPath('data.title', 'Free Tax Protest');
    }

    public function test_unknown_project_returns_not_found(): void
    {
        $this->getJson('/api/v1/projects/missing')->assertNotFound();
    }
}
