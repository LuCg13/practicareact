import React, { useState } from "react";
import "../../App.css";

function Index({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        const { token } = await response.json();
        localStorage.setItem("token", token); // Guardar el token en localStorage
        onLogin();
      } else {
        setErrorMessage("Credenciales incorrectas");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Error en la solicitud. Por favor, inténtalo nuevamente más tarde.");
    }
  };

  return (
    <div className="">
      <h2 className="">Iniciar sesión</h2>
      <form>
        <div className="input-group">
          <label htmlFor="username">Usuario:</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="input-group">
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <button type="button" onClick={handleLogin}>
            Iniciar sesión
          </button>
        </div>
        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </div>
  );
}

export default Index;
