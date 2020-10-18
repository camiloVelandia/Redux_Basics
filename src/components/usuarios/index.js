import React, { useState, useEffect } from "react";
import {connect} from 'react-redux'
import * as usuariosActions from '../../actions/usuariosActions'


import Tabla from '../usuarios/Tabla'
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
    return   <Tabla />
  }
 
    
    return (
      <div>
      <h1>Usuarios</h1>
        {ponerContenido()}
      </div>
    );
};

const mapStateToProps = (state)=>{
  return state.usuariosReducer
}

export default connect(mapStateToProps, usuariosActions) (Usuarios);
