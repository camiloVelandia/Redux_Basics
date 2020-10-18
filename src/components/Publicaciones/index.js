import React , {useEffect} from 'react';
import { connect } from "react-redux";
import * as usuariosActions from "../../actions/usuariosActions";
import * as publicacionesActions from "../../actions/publicacionesActions";

const {traerTodos: usuariosTraerTodos} = usuariosActions
const {traerTodos: publicacionesTraerTodos} = publicacionesActions


const Publicaciones = (props) => {
  console.log(props)
  useEffect(() => {
    if (!props.usuariosReducer.usuarios.length){
      console.log('dsfs')
      props.usuariosTraerTodos();
    
    }
  }, [])
  return (
    <div>
    <h1>Publicaciones de </h1>
      {props.match.params.key}
    </div>
  );
};

const mapStateToProps = ({usuariosReducer, publicacionesReducer}) => {
  return { usuariosReducer, publicacionesReducer };
};

const mapDispatchToProps = {
  usuariosTraerTodos,
  publicacionesTraerTodos,
};

export default connect(mapStateToProps, mapDispatchToProps)(Publicaciones);