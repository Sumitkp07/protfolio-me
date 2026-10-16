<?php

namespace App\Repositories;

use App\Contracts\Repositories\ProjectRepositoryInterface;
use App\Models\Project;
use Illuminate\Support\Collection;

class EloquentProjectRepository implements ProjectRepositoryInterface
{
    public function all(): Collection
    {
        return Project::query()->orderBy('sort_order')->get();
    }

    public function featured(): Collection
    {
        return Project::query()
            ->where('is_featured', true)
            ->orderBy('sort_order')
            ->get();
    }

    public function findBySlug(string $slug): ?Project
    {
        return Project::query()->where('slug', $slug)->first();
    }
}
