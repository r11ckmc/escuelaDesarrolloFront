


const Card = ({ objeto }) => {
    return (
      <div className="card">
        <h2>{objeto.titulo}</h2>
        <p>{objeto.descripcion}</p>
      </div>
    );
  };


  const CardsContainerTest = ({ objetos }) => {
    return (
      <div className="cards-container">
        <h2>entra</h2>
        {objetos.map((objeto) => (
          <Card key={objeto.id} objeto={objeto} />
        ))}
      </div>
    );
  };
  

function TestComp(){
  const datos = [
    { id:1, titulo: 'Título 1', descripcion: 'Descripción 1' },
    { id:2,titulo: 'Título 2', descripcion: 'Descripción 2' },
    { id:3,titulo: 'Título 3', descripcion: 'Descripción 3' },
  ];
  return(
    
    <div className="test">
      {console.log(datos)}
    <h1>Mis tarjetas</h1>
    <CardsContainerTest objetos={datos} />
  </div>


  );
}

export default TestComp;
