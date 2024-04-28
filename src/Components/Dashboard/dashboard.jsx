import React, { useState, useEffect } from "react";

function Dashboard() {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("No se encontró un token. Por favor, inicia sesión.");
      return;
    }
    fetch("http://localhost:3000/courses", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener los cursos del usuario");
        }
        return response.json();
      })
      .then((data) => {
        setCourses(data);
      })
      .catch((error) => {
        console.error("Error:", error);
        setError("Error al obtener los cursos del usuario. Por favor, inténtalo nuevamente más tarde.");
      });
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      {error ? (
        <p className="error-message">{error}</p>
      ) : (
        <ul className="course-list">
          {courses.map((course) => (
            <li key={course.id}>{course.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dashboard;
