import React, { useState, useEffect } from "react";
import axios from "axios";
import {connect} from 'react-redux'

const Usuarios = (props) => {
  // const [usuarios, setUsuarios] = useState([]);
  console.log(props)

  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/users")
  //     .then((resp) => {
  //       setUsuarios(resp.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  const ponerFilas = () =>
    props.usuarios.map((item) => (
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.website}</td>
      </tr>
    ));
    
    return (
      <div>
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

const mapStateToProps = (state)=>{
  return state.usuariosReducer
}

export default connect(mapStateToProps, {}) (Usuarios);
