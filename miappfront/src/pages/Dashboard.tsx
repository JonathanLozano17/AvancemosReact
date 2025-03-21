import React, { useEffect, useState } from "react";

const Dashboard: React.FC = () => {
  const [items, setItems] = useState<string[]>([]);  // Estado para almacenar los items
  const [error, setError] = useState<string>("");    // Estado para manejar errores

  // Obtener los items al cargar la página
  useEffect(() => {
    // Realizar la solicitud a la API
    fetch("https://localhost:7072/api/Items")  // Usa HTTPS si tu API lo requiere
      .then((response) => {
        if (!response.ok) {
          // Si la respuesta no es exitosa, lanzamos un error
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setItems(data);  // Asigna los datos obtenidos al estado
      })
      .catch((error) => {
        setError(error.message);  // Si hay un error, guardamos el mensaje de error
        console.error("Error fetching items:", error);  // Imprimir error en consola
      });
  }, []); // Este efecto solo se ejecutará una vez cuando el componente se monte

  return (
    <div>
      <h2>Items List</h2>
      {error && <p style={{ color: "red" }}>Error: {error}</p>} {/* Muestra un mensaje de error si hay uno */}
      <ul>
        {items.length > 0 ? (
          items.map((item, index) => (
            <li key={index}>{item}</li>  // Muestra los items de la lista
          ))
        ) : (
          <p>No items found or loading...</p>  // Mensaje cuando no hay items o están cargando
        )}
      </ul>
    </div>
  );
};

export default Dashboard;
