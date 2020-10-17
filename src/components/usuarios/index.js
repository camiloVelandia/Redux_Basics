import React, { useState, useEffect } from "react";
import {connect} from 'react-redux'
import * as usuariosActions from '../../actions/usuariosActions'

import Spinner from '../general/Spinner'
import Fatal from '../general/Fatal'

const Usuarios = (props) => {
  

  useEffect(() => {
    props.traerTodos()
  }, []);

  const ponerContenido=()=>{
    if(props.cargando){
      return <Spinner/>
    }
    if(props.error){
      return <Fatal mensaje={props.error}/>
    }
    return (
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
    );
  }
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
        {ponerContenido()}
      </div>
    );
};

const mapStateToProps = (state)=>{
  return state.usuariosReducer
}

export default connect(mapStateToProps, usuariosActions) (Usuarios);
