import React from 'react';
import { signInWithGoogle } from '../firebase/firebaseUtils';
import './Login.css'; // Asume que tienes un archivo de estilos CSS

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
      <img src="pokedex-image.png" alt="" className="pokedex-image"/>
      <p className="welcome-message"></p>
      <button className="google-sign-in" onClick={handleGoogleSignIn}>
        Inicia Sesión 
</button>
    </div>
  );
};
