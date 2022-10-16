<?php

// namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TranslationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $translations = array(
            //regisiter screen
            ['language_name' => "en", 'title' => 'name', 'translation' => 'Name', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")],
            ['language_name' => "de", 'title' => 'name', 'translation' => 'Name', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 
            ['language_name' => "es", 'title' => 'name', 'translation' => 'Nombre', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 
            ['language_name' => "fr", 'title' => 'name', 'translation' => 'Nom', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")],  
            ['language_name' => "pl", 'title' => 'name', 'translation' => 'Nazwa', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 

            ['language_name' => "en", 'title' => 'email', 'translation' => 'Email', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")],
            ['language_name' => "de", 'title' => 'email', 'translation' => 'Email', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 
            ['language_name' => "es", 'title' => 'email', 'translation' => 'Email', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 
            ['language_name' => "fr", 'title' => 'email', 'translation' => 'Email', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")],  
            ['language_name' => "pl", 'title' => 'email', 'translation' => 'Email', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 

            ['language_name' => "en", 'title' => 'password', 'translation' => 'Password', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")],
            ['language_name' => "de", 'title' => 'password', 'translation' => 'Passwort', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 
            ['language_name' => "es", 'title' => 'password', 'translation' => 'Contraseña', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 
            ['language_name' => "fr", 'title' => 'password', 'translation' => 'Mot de passe', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")],  
            ['language_name' => "pl", 'title' => 'password', 'translation' => 'Haslo', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 

            ['language_name' => "en", 'title' => 'confirmPassword', 'translation' => 'Confirm Password', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")],
            ['language_name' => "de", 'title' => 'confirmPassword', 'translation' => 'Kennwort bestätigen', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 
            ['language_name' => "es", 'title' => 'confirmPassword', 'translation' => 'Confirmar contraseña', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 
            ['language_name' => "fr", 'title' => 'confirmPassword', 'translation' => 'Confirmez le mot de passe', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")],  
            ['language_name' => "pl", 'title' => 'confirmPassword', 'translation' => 'Potwierdz haslo', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 

            ['language_name' => "en", 'title' => 'register', 'translation' => 'Register', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")],
            ['language_name' => "de", 'title' => 'register', 'translation' => 'Registrieren', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 
            ['language_name' => "es", 'title' => 'register', 'translation' => 'Registrarse', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 
            ['language_name' => "fr", 'title' => 'register', 'translation' => "S'inscrire", 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")],  
            ['language_name' => "pl", 'title' => 'register', 'translation' => 'Rejestruj', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 

            ['language_name' => "en", 'title' => 'alreadyRegistered', 'translation' => 'Already registered?', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")],
            ['language_name' => "de", 'title' => 'alreadyRegistered', 'translation' => 'Bereits registriert?', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 
            ['language_name' => "es", 'title' => 'alreadyRegistered', 'translation' => '¿Ya registrado?', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 
            ['language_name' => "fr", 'title' => 'alreadyRegistered', 'translation' => "Déjà enregistré?", 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")],  
            ['language_name' => "pl", 'title' => 'alreadyRegistered', 'translation' => 'Masz juz konto?', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 
            
            //login screen
            ['language_name' => "en", 'title' => 'login', 'translation' => 'Login', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")],
            ['language_name' => "de", 'title' => 'login', 'translation' => 'Anmeldung', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 
            ['language_name' => "es", 'title' => 'login', 'translation' => 'Acceso', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 
            ['language_name' => "fr", 'title' => 'login', 'translation' => 'Connexion', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")],  
            ['language_name' => "pl", 'title' => 'login', 'translation' => 'Zaloguj', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 

            ['language_name' => "en", 'title' => 'rememberMe', 'translation' => 'Remember me', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")],
            ['language_name' => "de", 'title' => 'rememberMe', 'translation' => 'Behalte mich in Erinnerung', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 
            ['language_name' => "es", 'title' => 'rememberMe', 'translation' => 'Recuérdame', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 
            ['language_name' => "fr", 'title' => 'rememberMe', 'translation' => 'Souviens-toi de moi', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")],  
            ['language_name' => "pl", 'title' => 'rememberMe', 'translation' => 'Zapamietaj mnie', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 

            ['language_name' => "en", 'title' => 'createAnAccount', 'translation' => 'Create an account', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")],
            ['language_name' => "de", 'title' => 'createAnAccount', 'translation' => 'Ein Konto erstellen', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 
            ['language_name' => "es", 'title' => 'createAnAccount', 'translation' => 'Crea una cuenta', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 
            ['language_name' => "fr", 'title' => 'createAnAccount', 'translation' => 'Créer un compte', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")],  
            ['language_name' => "pl", 'title' => 'createAnAccount', 'translation' => 'Zaloz konto', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 

            ['language_name' => "en", 'title' => 'forgotYourPassword', 'translation' => 'Forgot your password?', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")],
            ['language_name' => "de", 'title' => 'forgotYourPassword', 'translation' => 'Passwort vergessen?', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 
            ['language_name' => "es", 'title' => 'forgotYourPassword', 'translation' => '¿Olvidaste tu contraseña?', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 
            ['language_name' => "fr", 'title' => 'forgotYourPassword', 'translation' => 'Mot de passe oublié?', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")],  
            ['language_name' => "pl", 'title' => 'forgotYourPassword', 'translation' => 'Reset hasla', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 

            //forgot password screen
            ['language_name' => "en", 'title' => 'forgotPasswordDescription', 'translation' => 'Forgot your password? No problem. Just let us know your email address and we will email you a password. Reset link that will allow you to choose a new one.', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")],
            ['language_name' => "de", 'title' => 'forgotPasswordDescription', 'translation' => 'Passwort vergessen? Kein Problem. Teilen Sie uns einfach Ihre E-Mail-Adresse mit und wir senden Ihnen ein Passwort per E-Mail zu. Link zurücksetzen, mit dem Sie einen neuen auswählen können.', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 
            ['language_name' => "es", 'title' => 'forgotPasswordDescription', 'translation' => '¿Olvidaste tu contraseña? No hay problema. Simplemente díganos su dirección de correo electrónico y le enviaremos una contraseña. Restablecer enlace que le permitirá elegir uno nuevo.', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 
            ['language_name' => "fr", 'title' => 'forgotPasswordDescription', 'translation' => "Mot de passe oublié? Aucun problème. Communiquez-nous simplement votre adresse e-mail et nous vous enverrons un mot de passe par e-mail. Lien de réinitialisation qui vous permettra d'en choisir un nouveau.", 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")],  
            ['language_name' => "pl", 'title' => 'forgotPasswordDescription', 'translation' => 'Reset hasła. Podaj nam swój adres e-mail, a my wyślemy Ci hasło. Link do resetowania, który pozwoli Ci wybrać nowy.', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 

            ['language_name' => "en", 'title' => 'reset', 'translation' => 'Reset', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")],
            ['language_name' => "de", 'title' => 'reset', 'translation' => 'Zurücksetzen', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 
            ['language_name' => "es", 'title' => 'reset', 'translation' => 'Reiniciar', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 
            ['language_name' => "fr", 'title' => 'reset', 'translation' => "Réinitialiser", 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")],  
            ['language_name' => "pl", 'title' => 'reset', 'translation' => 'Reset', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")],
            
            //confirm password screen
            ['language_name' => "en", 'title' => 'confirmPassword', 'translation' => 'Confirm password', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")],
            ['language_name' => "de", 'title' => 'confirmPassword', 'translation' => 'Kennwort bestätigen', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 
            ['language_name' => "es", 'title' => 'confirmPassword', 'translation' => 'Confirmar contraseña', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 
            ['language_name' => "fr", 'title' => 'confirmPassword', 'translation' => 'Confirmez le mot de passe', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")],  
            ['language_name' => "pl", 'title' => 'confirmPassword', 'translation' => 'Potwierdz haslo', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 

            ['language_name' => "en", 'title' => 'confirmPasswordDescription', 'translation' => 'This is a secure area of the application. Please confirm your password before continuing.', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")],
            ['language_name' => "de", 'title' => 'confirmPasswordDescription', 'translation' => 'Kennwort bestätigen', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 
            ['language_name' => "es", 'title' => 'confirmPasswordDescription', 'translation' => 'Esta es un área segura de la aplicación. Confirme su contraseña antes de continuar.', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 
            ['language_name' => "fr", 'title' => 'confirmPasswordDescription', 'translation' => "Il s'agit d'une zone sécurisée de l'application. Veuillez confirmer votre mot de passe avant de continuer.", 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")],  
            ['language_name' => "pl", 'title' => 'confirmPasswordDescription', 'translation' => 'Potwierdź swoje hasło przed kontynuowaniem.', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")],
            
            //verify email screen
            ['language_name' => "en", 'title' => 'emailVerification', 'translation' => 'Email Verification', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")],
            ['language_name' => "de", 'title' => 'emailVerification', 'translation' => 'E-Mail-Verifizierung', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 
            ['language_name' => "es", 'title' => 'emailVerification', 'translation' => 'Verificacion de email', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 
            ['language_name' => "fr", 'title' => 'emailVerification', 'translation' => "Vérification de l'E-mail", 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")],  
            ['language_name' => "pl", 'title' => 'emailVerification', 'translation' => 'Weryfikacja email', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 

            ['language_name' => "en", 'title' => 'emailVerificationDescription', 'translation' => "Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another.", 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")],
            ['language_name' => "de", 'title' => 'emailVerificationDescription', 'translation' => "Danke für's Registrieren! Könnten Sie, bevor Sie beginnen, Ihre E-Mail-Adresse bestätigen, indem Sie auf den Link klicken, den wir Ihnen gerade per E-Mail zugesandt haben? Sollten Sie die E-Mail nicht erhalten haben, senden wir Ihnen gerne eine neue zu.", 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 
            ['language_name' => "es", 'title' => 'emailVerificationDescription', 'translation' => 'Gracias por registrarte! Antes de comenzar, ¿podría verificar su dirección de correo electrónico haciendo clic en el enlace que le acabamos de enviar? Si no recibió el correo electrónico, con gusto le enviaremos otro.', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 
            ['language_name' => "fr", 'title' => 'emailVerificationDescription', 'translation' => "Merci pour votre inscription! Avant de commencer, pourriez-vous vérifier votre adresse e-mail en cliquant sur le lien que nous venons de vous envoyer par e-mail? Si vous n'avez pas reçu l'e-mail, nous nous ferons un plaisir de vous en envoyer un autre.", 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")],  
            ['language_name' => "pl", 'title' => 'emailVerificationDescription', 'translation' => 'Dziękujemy za zarejestrowanie się! Czy przed rozpoczęciem możesz zweryfikować swój adres e-mail, klikając link, który właśnie do Ciebie wysłaliśmy? Jeśli nie otrzymałeś wiadomości e-mail, chętnie wyślemy Ci kolejną.', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 

            ['language_name' => "en", 'title' => 'emailVerificationSentDescription', 'translation' => 'A new verification link has been sent to the email address you provided during registration.', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")],
            ['language_name' => "de", 'title' => 'emailVerificationSentDescription', 'translation' => 'Ein neuer Bestätigungslink wurde an die E-Mail-Adresse gesendet, die Sie bei der Registrierung angegeben haben.', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 
            ['language_name' => "es", 'title' => 'emailVerificationSentDescription', 'translation' => 'Se ha enviado un nuevo enlace de verificación a la dirección de correo electrónico que proporcionó durante el registro.', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 
            ['language_name' => "fr", 'title' => 'emailVerificationSentDescription', 'translation' => "Un nouveau lien de vérification a été envoyé à l'adresse e-mail que vous avez fournie lors de l'inscription.", 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")],  
            ['language_name' => "pl", 'title' => 'emailVerificationSentDescription', 'translation' => 'Nowy link weryfikacyjny został wysłany na adres e-mail podany podczas rejestracji.', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")],

            ['language_name' => "en", 'title' => 'resendVerificationEmail', 'translation' => 'Resend Verification Email', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")],
            ['language_name' => "de", 'title' => 'resendVerificationEmail', 'translation' => 'Bestätigungsmail erneut senden', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 
            ['language_name' => "es", 'title' => 'resendVerificationEmail', 'translation' => 'Reenviar correo electrónico de verificación', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 
            ['language_name' => "fr", 'title' => 'resendVerificationEmail', 'translation' => "Renvoyer l'e-mail de vérification", 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")],  
            ['language_name' => "pl", 'title' => 'resendVerificationEmail', 'translation' => 'Ponownie wyslij e-mail weryfikacyjny', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 

            ['language_name' => "en", 'title' => 'logOut', 'translation' => 'Log Out', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")],
            ['language_name' => "de", 'title' => 'logOut', 'translation' => 'Ausloggen', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 
            ['language_name' => "es", 'title' => 'logOut', 'translation' => 'Cerrar sesión', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 
            ['language_name' => "fr", 'title' => 'logOut', 'translation' => "Se déconnecter", 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")],  
            ['language_name' => "pl", 'title' => 'logOut', 'translation' => 'Wyloguj', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 

            ['language_name' => "en", 'title' => 'startLearning', 'translation' => 'Start Learning', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")],
            ['language_name' => "de", 'title' => 'startLearning', 'translation' => 'Beginne zu lernen', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 
            ['language_name' => "es", 'title' => 'startLearning', 'translation' => 'Comienza a aprender', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 
            ['language_name' => "fr", 'title' => 'startLearning', 'translation' => "Commencer à apprendre", 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")],  
            ['language_name' => "pl", 'title' => 'startLearning', 'translation' => 'Rozpocznij nauke', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 

            ['language_name' => "en", 'title' => 'hi', 'translation' => 'Hi', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")],
            ['language_name' => "de", 'title' => 'hi', 'translation' => 'Hallo', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 
            ['language_name' => "es", 'title' => 'hi', 'translation' => 'Hola', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 
            ['language_name' => "fr", 'title' => 'hi', 'translation' => "Salut", 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")],  
            ['language_name' => "pl", 'title' => 'hi', 'translation' => 'Czesc', 'created_at' => date("Y-m-d H:i:s"), 'updated_at' => date("Y-m-d H:i:s")], 
        );

        
        
        foreach ($translations as $translation) {
          if (!DB::table('translations')->where([
                ['language_name', $translation['language_name']],
                ['title', $translation['title']],
                ['translation', $translation['translation']]
          ])->exists()) {
            DB::table('translations')->insert($translation);
          }
        }
    }
}
