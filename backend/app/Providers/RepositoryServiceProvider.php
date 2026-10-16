<?php

namespace App\Providers;

use App\Contracts\Repositories\ContactMessageRepositoryInterface;
use App\Contracts\Repositories\EducationRepositoryInterface;
use App\Contracts\Repositories\ExperienceRepositoryInterface;
use App\Contracts\Repositories\ProfileRepositoryInterface;
use App\Contracts\Repositories\ProjectRepositoryInterface;
use App\Contracts\Repositories\SkillCategoryRepositoryInterface;
use App\Repositories\EloquentContactMessageRepository;
use App\Repositories\EloquentEducationRepository;
use App\Repositories\EloquentExperienceRepository;
use App\Repositories\EloquentProfileRepository;
use App\Repositories\EloquentProjectRepository;
use App\Repositories\EloquentSkillCategoryRepository;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    public array $bindings = [
        ProfileRepositoryInterface::class => EloquentProfileRepository::class,
        ExperienceRepositoryInterface::class => EloquentExperienceRepository::class,
        ProjectRepositoryInterface::class => EloquentProjectRepository::class,
        SkillCategoryRepositoryInterface::class => EloquentSkillCategoryRepository::class,
        EducationRepositoryInterface::class => EloquentEducationRepository::class,
        ContactMessageRepositoryInterface::class => EloquentContactMessageRepository::class,
    ];
}
