import React, { useRef } from 'react';
import axios from 'axios';
import './App.css'

const App = () => {
  const nombreRef = useRef(null);
  const apellidoRef = useRef(null);
  const correoRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        nombre: nombreRef.current.value,
        apellido: apellidoRef.current.value,
        correo: correoRef.current.value,
      };
      const baseURL = "http://localhost:3000/usuarios/registrar";

      const response = await axios.post(baseURL, data);
      
      if (response.status === 200) {
        alert("Registro exitoso");
      } else {
        alert("Error de registro");
      }
    } catch (error) {
      alert("Error de servidor" + error);
    }
  };


  return (
    <div style={{ border: '1px solid white', borderRadius: '20px', width: '450px', height: '350px', paddingTop: '20px' }}>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
        <h2>Registro de Personas</h2>
        <label style={{ display: 'block', margin: '20px', justifyContent: 'left', display: 'flex' }}>
          Nombre:
          <input
            type="text"
            ref={nombreRef}
            style={{ width: '100%', padding: '5px', marginBottom: '10px' }}
          />
        </label>
        <label style={{ display: 'block', margin: '20px', justifyContent: 'left', display: 'flex' }}>
          Apellido:
          <input
            type="text"
            ref={apellidoRef}
            style={{ width: '100%', padding: '5px', marginBottom: '10px' }}
          />
        </label>
        <label style={{ display: 'block', margin: '20px', justifyContent: 'left', display: 'flex' }}>
          Correo:
          <input
            type="email"
            ref={correoRef}
            style={{ width: '100%', padding: '5px', marginBottom: '10px' }}
          />
        </label>
        <button type="submit" style={{ padding: '5px 10px', background: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>Registrar</button>
      </form>
    </div>
  );
};

export default App;
