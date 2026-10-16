<?php

namespace App\Services;

use App\Contracts\Repositories\ProjectRepositoryInterface;
use App\Models\Project;
use Illuminate\Support\Collection;

class ProjectService
{
    public function __construct(private readonly ProjectRepositoryInterface $projects)
    {
    }

    public function list(bool $featuredOnly = false): Collection
    {
        return $featuredOnly ? $this->projects->featured() : $this->projects->all();
    }

    public function findBySlugOrFail(string $slug): Project
    {
        return $this->projects->findBySlug($slug) ?? abort(404);
    }
}
