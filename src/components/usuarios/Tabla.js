import React from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Tabla = (props) => {
   const ponerFilas = () =>
     props.usuarios.map((item, key) => (
       <tr key={item.id}>
         <td>{item.name}</td>
         <td>{item.email}</td>
         <td>{item.website}</td>
         <td>
         <Link to={`/publicaciones/${key}`}>

           <div className="eye icon"></div>
         </Link>
         </td>
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

export  default connect(mapStateToProps, '') (Tabla);