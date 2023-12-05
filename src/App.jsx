import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { AuthProvider } from "./components/AuthContext";
import { Home } from './components/Home';
import { Pokedex } from './components/Pokedex';
import { PokemonTeam } from './components/PokemonTeam';
import { Login } from './components/Login';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={
            <>
              <Helmet>
                <title>POKEDEX</title>
                <link rel="icon" href="C:\Users\alvar\OneDrive\Escritorio\yy-main\yy-main\src\assets\pikachu.png" />
              </Helmet>
              <Home />
            </>
          } />
          <Route path="/pokedex" element={
            <>
              <Helmet>
                <title>Pokedex</title>
              </Helmet>
              <Pokedex />
            </>
          } />
          <Route path="/pokemon-team" element={
            <>
              <Helmet>
                <title>Pokemon Team</title>
              </Helmet>
              <PokemonTeam />
            </>
          } />
          <Route path="/login" element={
            <>
              <Helmet>
                <title>Login</title>
              </Helmet>
              <Login />
            </>
          } />
          {/* Más rutas con sus respectivos títulos */}
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
