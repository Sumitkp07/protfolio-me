<?php

namespace App\Contracts\Repositories;

use Illuminate\Support\Collection;

interface EducationRepositoryInterface
{
    public function all(): Collection;
}
