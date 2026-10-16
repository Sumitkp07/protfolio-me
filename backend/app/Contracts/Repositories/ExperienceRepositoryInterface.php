<?php

namespace App\Contracts\Repositories;

use Illuminate\Support\Collection;

interface ExperienceRepositoryInterface
{
    public function all(): Collection;
}
