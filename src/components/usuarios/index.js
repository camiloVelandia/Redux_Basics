import React, { useState, useEffect } from "react";
import {connect} from 'react-redux'
import * as usuariosActions from '../../actions/usuariosActions'

const Usuarios = (props) => {
  // console.log(props)

  useEffect(() => {
    props.traerTodos()
  }, []);

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

export default connect(mapStateToProps, usuariosActions) (Usuarios);
