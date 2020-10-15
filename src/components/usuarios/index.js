import React, { useState, useEffect } from "react";
import axios from "axios";

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((resp) => {
        setUsuarios(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const ponerFilas = () =>
    usuarios.map((item) => (
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.website}</td>
      </tr>
    ));

  return (
    <div className={"margen"}>
      <table className="tabla">
        <thead>
          <tr>
            <th>nombre</th>
            <th>correo</th>
            <th>enlace</th>
          </tr>
        </thead>
        <tbody>{ponerFilas()}</tbody>
      </table>
    </div>
  );
};

export default Usuarios;
