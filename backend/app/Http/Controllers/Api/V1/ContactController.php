<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreContactRequest;
use App\Services\ContactService;
use Illuminate\Http\JsonResponse;

class ContactController extends Controller
{
    public function __construct(private readonly ContactService $contact)
    {
    }

    public function store(StoreContactRequest $request): JsonResponse
    {
        $this->contact->submit($request->validated(), $request->ip());

        return response()->json(['message' => 'Message received'], 201);
    }
}
