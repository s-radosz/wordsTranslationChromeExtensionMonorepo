<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\UserLevel;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class UserLevelsController extends Controller
{
    public function index(Request $request) {
        try {
            $userLevels = UserLevel::all();

            return response()->json(
                ['result' => $userLevels
            ], 200); 
        } catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
            $response = [
                'status' => 'ERROR',
                'message' => 'token expired',
            ];
            return response()->json($response, 401);
        } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
            $response = [
                'status' => 'ERROR',
                'message' => 'token invalid',
            ];
            return response()->json($response, 401);
        } catch (Tymon\JWTAuth\Exceptions\JWTException $e) {
            $response = [
                'status' => 'ERROR',
                'message' => 'token absent',
            ];
            return response()->json($response, 401);
        }
    }
}
