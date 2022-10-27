<?php

namespace App\Http\Controllers;
use App\User;
use App\Word;
use DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use JWTAuth;
use Carbon\Carbon;
use Tymon\JWTAuth\Exceptions\JWTException;
use Validator;

class UserController extends Controller
{
    public function authenticate(Request $request)
    {
        $credentials = $request->only('email', 'password');

        try {
            if (!$token = JWTAuth::attempt($credentials)) {
                return response()->json(['result' => 'invalid_credentials'], 200);
            } else {
                $user = User::where('email', $request->email)
                    ->first();
            }
        } catch (JWTException $e) {
            return response()->json(['result' => 'could_not_create_token'], 401);
        }

        return response()->json(['result' => [
            'token' => $token,
            'user' => $user
        ]], 200);
    }

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json(['result' => 'Invalid Data'], 401);
        }

        $user = User::create([
            'email' => $request->get('email'),
            'name' => $request->get('name'),
            'user_level_id' => (int)$request->get('user_level_id'),
            'password' => Hash::make($request->get('password'))
        ]);

        $token = JWTAuth::fromUser($user);

        return response()->json(['result' => compact('user', 'token')], 200);
    }

    public function getAuthenticatedUser()
    {
        try {
            if (!$user = JWTAuth::parseToken()->authenticate()) {
                return response()->json(['result' => 'user_not_found', "token_error" => true], 401);
            }
        } catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
            return response()->json(['result' => 'token_expired', "token_error" => true], 401);
        } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
            return response()->json(['result' => 'token_invalid', "token_error" => true], 401);
        } catch (Tymon\JWTAuth\Exceptions\JWTException $e) {
            return response()->json(['result' => 'token_absent', "token_error" => true], 401);
        }

        return response()->json(['result' => compact('user')], 200);
    }

    public function checkIfEmailExists(Request $request)
    {
        try {
            $email = $request->email;

            $user = User::where('email', $email)->count();

            return response()->json(['result' => $user, 200]);
        } catch (\Exception $e) {
            $user = User::where('email', $email)->get();

            $this->storeErrorLog($user->id, '/checkIfEmailExists', $e->getMessage());

            return response()->json(['result' => $e->getMessage()], 401);
        }
    }

    public function getUserWordsCounts(Request $request) {
        try {
            $userId = $request->userId;

            $wordsOverallCount = Word::where('user_id', $userId)->count();

            $wordsWeekCount = Word::where('user_id', $userId)
                                ->where('created_at', '>', Carbon::today()->subDays(7))
                                ->count();

            $wordsTodayCount = Word::where('user_id', $userId)
                                ->where('created_at', '>=', Carbon::today())
                                ->count();

            return response()->json(['result' => [
                "wordsOverallCount" => $wordsOverallCount,
                "wordsWeekCount" => $wordsWeekCount,
                "wordsTodayCount" => $wordsTodayCount
            ]], 200);
        } catch (\Exception $e) {
            $user = User::where('email', $email)->get();
            $this->storeErrorLog($user->id, '/checkIfEmailExists', $e->getMessage());

            return response()->json(['result' => $e->getMessage()], 401);
        }
    }

    public function saveUserTranslateFrom(Request $request) {
        try {
            $userId = $request->userId;
            $language = $request->language;

            $updatedUser = User::where('id', $userId)
                ->update(array('translate_from' => $language));

            return response()->json(['result' => [
                'updatedUser' => $updatedUser
            ]], 200);
        } catch (\Exception $e) {
            $user = User::where('id', $userId)->get();
            $this->storeErrorLog($user->id, '/saveUserTranslateFrom', $e->getMessage());

            return response()->json(['result' => $e->getMessage()], 401);
        }
    }
}
