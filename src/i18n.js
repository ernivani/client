import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';



i18next.use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: 'en',
  resources: {
    en: {
      translation: {
        'notFound': 'Error 404: Page not found',
        'home': 'Home',
        'login_button': 'Login',
        'login_title': "OH, You're back !",
        'login_comment': 'We are so happy to see you again !',
        'register_title': 'Create your account',
        'email_label': 'Email',
        'username_label': 'Username',
        'username_placeholder': 'Enter your username',
        'password_label': 'Password',
        'email_placeholder': 'Enter your email',
        'password_placeholder': 'Enter your password',
        'login_button': 'Login',
        'register_button': 'Register',
        'forgot_password': 'Forgot your password ?',
        'dont_have_account': "Don't have an account ?",
        'register_link': 'Register',
        'already_have_account': 'Already have an account ?'

      },
    },
    fr: {
      translation: {
        'notFound': 'Erreur 404: Page non trouvée',
        'home': 'Accueil',
        'login_button': 'Connexion',
        'login_title': "OH, Vous êtes de retour !",
        'login_comment': 'Nous sommes si heureux de vous revoir !',
        'register_title': 'Créez votre compte',
        'email_label': 'Email',
        'username_label': 'Nom d\'utilisateur',
        'username_placeholder': 'Entrez votre nom d\'utilisateur',
        'password_label': 'Mot de passe',
        'email_placeholder': 'Entrez votre email',
        'password_placeholder': 'Entrez votre mot de passe',
        'login_button': 'Connexion',
        'register_button': 'Inscription',
        'forgot_password': 'Mot de passe oublié ?',
        'dont_have_account': "Vous n'avez pas de compte ?",
        'register_link': 'Inscription',
        'already_have_account': 'Vous avez déjà un compte ?'
        

      },
    },
  },
});
