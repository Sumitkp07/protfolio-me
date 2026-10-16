<?php

namespace App\Contracts\Repositories;

use App\Models\Project;
use Illuminate\Support\Collection;

interface ProjectRepositoryInterface
{
    public function all(): Collection;

    public function featured(): Collection;

    public function findBySlug(string $slug): ?Project;
}
