import React, { useState } from 'react';

export const BarraBusqueda = ({ onBuscar }) => {
    const [terminoBusqueda, setTerminoBusqueda] = useState('');

    const manejarCambio = (e) => {
        setTerminoBusqueda(e.target.value);
    };

    const manejarEnvio = (e) => {
        e.preventDefault();
        onBuscar(terminoBusqueda);
    };

    return (
      <form onSubmit={manejarEnvio}>
      <input
        type="text"
        value={terminoBusqueda}
        onChange={manejarCambio}
        placeholder="Ingresa Pokémon" 
      />
      <button type="submit" className="boton-buscar">Buscar</button>
  </form>
);
};
