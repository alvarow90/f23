import React from 'react';
import { signInWithGoogle } from '../firebase/firebaseUtils';
import './Login.css';

export const Login = ({ onSignIn }) => {
  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      onSignIn();
    } catch (error) {
      console.error('Error al iniciar sesión con Google:', error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <img src="pokedex-image.png" alt="" className="pokedex-image" />
        <p className="welcome-message">¡Bienvenido a la Pokedex!</p>
      </div>
      <button className="google-sign-in" onClick={handleGoogleSignIn}>
        Iniciar Sesión con Google
      </button>
    </div>
  );
};
