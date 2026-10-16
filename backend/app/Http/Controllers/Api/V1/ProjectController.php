<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProjectResource;
use App\Services\ProjectService;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class ProjectController extends Controller
{
    public function __construct(private readonly ProjectService $projects)
    {
    }

    public function index(Request $request): AnonymousResourceCollection
    {
        return ProjectResource::collection(
            $this->projects->list($request->boolean('featured'))
        );
    }

    public function show(string $project): ProjectResource
    {
        return new ProjectResource($this->projects->findBySlugOrFail($project));
    }
}
