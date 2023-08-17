/* eslint-disable react/prop-types */
function Card(props) {
    return (
      <div className="card">
        {props.nombre ? <p>Nombre: {props.nombre}</p> : undefined}       
        {props.color ? <div className="card-footer"><p>Sabemos que tu color favorito es:</p>{props.color}</div> : undefined}
      </div>
    );
  }
  
  export default Card;