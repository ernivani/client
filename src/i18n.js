import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "en",
        resources: {
            en: {
                translation: {
                    home_title: "Home",
                    home_subtitle: "Welcome to the home page",
                    notFound: "Error 404: Page not found",
                    home: "Home",
                    login_button: "Login",
                    login_title: "OH, You're back !",
                    login_comment: "We are so happy to see you again !",
                    register_title: "Create your account",
                    email_label: "Email",
                    username_label: "Username",
                    username_placeholder: "Enter your username",
                    password_label: "Password",
                    email_placeholder: "Enter your email",
                    password_placeholder: "Enter your password",
                    login_button: "Login",
                    register_button: "Register",
                    forgot_password: "Forgot your password ?",
                    dont_have_account: "Don't have an account ?",
                    register_link: "Register",
                    already_have_account: "Already have an account ?",
                    signIn: "Login",
                    signUp: "Register",
                    email_required: "A valid email is required",
                    password_required: "Password is required",
                    reset_password_title: "Reset your password",
                    new_password_label: "Reset password",
                    new_password_placeholder: "Enter your new password",
                    confirm_new_password_label: "Confirm new password",
                    confirm_new_password_placeholder: "Confirm your new password",
                    reset_password_button: "Reset password",
                    login_link_text: "Back to",
                    login_link: "Login",
                    app_button: "Open app",
                },
            },
            fr: {
                translation: {
                    home_title: "Accueil",
                    home_subtitle: "Bienvenue sur la page d'accueil",
                    notFound: "Erreur 404: Page non trouvée",
                    home: "Accueil",
                    login_button: "Connexion",
                    login_title: "OH, Vous êtes de retour !",
                    login_comment: "Nous sommes si heureux de vous revoir !",
                    register_title: "Créez votre compte",
                    email_label: "Email",
                    username_label: "Nom d'utilisateur",
                    username_placeholder: "Entrez votre nom d'utilisateur",
                    password_label: "Mot de passe",
                    email_placeholder: "Entrez votre email",
                    password_placeholder: "Entrez votre mot de passe",
                    login_button: "Connexion",
                    register_button: "Inscription",
                    forgot_password: "Mot de passe oublié ?",
                    dont_have_account: "Vous n'avez pas de compte ?",
                    register_link: "Inscription",
                    already_have_account: "Vous avez déjà un compte ?",
                    signIn: "Connexion",
                    signUp: "Inscription",
                    email_required: "Un email valide est requis",
                    reset_password_title: "Réinitialiser votre mot de passe",
                    new_password_label: "Mot de passe",
                    new_password_placeholder:
                        "Entrez votre nouveau mot de passe",
                    confirm_new_password_label:
                        "Confirmer le nouveau mot de passe",
                    confirm_new_password_placeholder:
                        "Confirmez votre nouveau mot de passe",
                    reset_password_button: "Réinitialiser le mot de passe",
                    login_link_text: "Retour à",
                    login_link: "Connexion",
                    app_button: "Ouvrir l'application",
                },
            },
        },
    });
