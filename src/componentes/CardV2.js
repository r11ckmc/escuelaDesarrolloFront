
function CardV2 ( props){
    return (
      <div className="card" key={props.id}>
        {console.log(props)}
        <h2>{props.titulo}</h2>
        <p>{props.descripcion}</p>
        <h4 className='precio'>${props.precio}</h4>

      </div>
    );
  };


  export default CardV2;
