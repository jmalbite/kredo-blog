<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $fields = $request->validate([
            'email' => 'required|string|unique:users,email',
            'username' => 'required|string',
            'name'=> 'required|string',
            'password' => 'required|string|confirmed'
        ]);

        $user = User::create([
            'email' => $fields['email'],
            'name' => $fields['name'],
            'username' => $fields['username'],
            'password' => bcrypt($fields['password'])
        ]);


        $token = $user->createToken('myapptoken')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token,
        ];

        return response($response, 201);
    }


    public function login(Request $request)
    {
        $fields = $request->validate([
            'username' => 'required|string',
            'password' => 'required|string'
        ]);

        // Check username
        $user = User::where('username', $fields['username'])->first();

        // Check password
        if (!$user || !Hash::check($fields['password'], $user->password)) {
            return response([
                'message' => 'Invalid Credentials'
            ], 401);
        }

        $token = $user->createToken('myapptoken')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response($response, 201);
    }



    public function logout(Request $request)
    {
        $user = request()->user();
        $user->tokens()->where('id', $user->currentAccessToken()->id)->delete();
        return [
            'message' => 'Logged out'
        ];
    }
}
