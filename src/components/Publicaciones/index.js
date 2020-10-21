import React , {useEffect} from 'react';
import { connect } from "react-redux";
import * as usuariosActions from "../../actions/usuariosActions";
import * as publicacionesActions from "../../actions/publicacionesActions";
import Spinner from "../general/Spinner";
import Fatal from "../general/Fatal";

const {traerTodos: usuariosTraerTodos} = usuariosActions
const { traerPorUsuario: publicacionesTraerPorUsuario, abrirCerrar } = publicacionesActions;


const Publicaciones = (props) => {
  console.log(props)
  useEffect(() => {
    const {
      usuariosTraerTodos,
      publicacionesTraerPorUsuario,
      match: {params:{key}}
    } = props
    const publicacionesporuser = async ()=>{

      if (!props.usuariosReducer.usuarios.length) {
       await usuariosTraerTodos();
      }
      if(props.usuariosReducer.error){
        return 
      }
        if (!("publicaciones_key" in props.usuariosReducer.usuarios[key])) {
          await publicacionesTraerPorUsuario(key);
        }
    }
    publicacionesporuser()
  }, [])

  const ponerUsuario = ()=>{
    const {
      usuariosReducer,
      match: {params:{key}}
    } = props

    if(!usuariosReducer.usuarios.length || usuariosReducer.cargando){
      return <Spinner/>
    }
    if(usuariosReducer.error){
      return <Fatal mensaje={usuariosReducer.error} />
    }
    const nombre = usuariosReducer.usuarios[key].name
    return(
       
    <h1>Publicaciones de {nombre} </h1>
    )
  }

  const ponerPublicaciones=()=>{
    const {
      usuariosReducer,
      usuariosReducer: { usuarios },
      publicacionesReducer,
      publicacionesReducer: { publicaciones },
      match: {
        params: { key },
      },
    } = props;

    if (!usuarios.length)return
    if(usuariosReducer.error) return

    if(publicacionesReducer.cargando){
      return <Spinner/>
    }
    if(publicacionesReducer.error){
      return <Fatal mensaje={publicacionesReducer.error}/>
    }
    if(!publicaciones.length)return

    if(!('publicaciones_key' in usuarios[key]))return

    const {publicaciones_key} = usuarios[key]

    return mostrarInfo(publicaciones[publicaciones_key], publicaciones_key)
  }

  const mostrarInfo = (publicaciones, pub_key) =>
    publicaciones.map((publicacion, com_key) => (
      <div
        className="pub_title"
        key={publicacion.id}
        onClick={props.abrirCerrar(pub_key, com_key)}
      >
        <h2>{publicacion.title}</h2>
        <h3>{publicacion.body}</h3>
      </div>
    ));

  return (
    <div>
      {ponerUsuario()}
      {ponerPublicaciones()}
    </div>
  );
};

const mapStateToProps = ({usuariosReducer, publicacionesReducer}) => {
  return { usuariosReducer, publicacionesReducer };
};

const mapDispatchToProps = {
  usuariosTraerTodos,
  publicacionesTraerPorUsuario,
  abrirCerrar
};

export default connect(mapStateToProps, mapDispatchToProps)(Publicaciones);