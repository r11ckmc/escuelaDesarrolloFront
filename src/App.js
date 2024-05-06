import logo from './logo.svg';
import './App.css';
import './MainInputs.css'
import CardV2 from './componentes/CardV2'
import React, { Component, useState } from 'react';

/*crear inputs */

const InputCard=({obj})=>{
  return(
    <div className='input'>
      <input type='text' id={obj.id} name={obj.id} placeholder={obj.titulo}></input>
    </div>
  );
};

const InputCardContainer =({obj})=>{
  return(
    <div>
      {obj.map((obj)=>(
                <InputCard key={obj.id} obj={obj} />
      ))}

    </div>
  );
};


function App() {

  const [total,settotal]=useState(0);


    const [datos,setdato]=useState([]);

    
     const agregarv2=()=>{

      let producto=parseInt(document.getElementById('txtPrecio').value);
      let i=datos.length+1;
      let newtotal=parseInt(total)+producto;
      settotal(newtotal.toString());
      console.log(total);
      let newDato=[{
        id:i,
        titulo:document.getElementById('txtNombre').value,
        descripcion:document.getElementById('txtDescripccion').value,
        precio:parseInt(document.getElementById('txtPrecio').value)

      }];

     /* setdato(datos.push({
        id:i,
        titulo:document.getElementById('txtNombre').value,
        descripcion:document.getElementById('txtDescripccion').value
      }));*/

      setdato([ ...datos,newDato]);
      document.getElementById('txtNombre').value='';
      document.getElementById('txtDescripccion').value='';
      document.getElementById('txtPrecio').value='';
      
    };

/*
  var datos = [
    { id:1, titulo: 'Título 1', descripcion: 'Descripción 1' },
    { id:2,titulo: 'Título 2', descripcion: 'Descripción 2' },
    { id:3,titulo: 'Título 3', descripcion: 'Descripción 3' },
  ];*/

  const INPUTS_VENTAS =[
    {
 
     id:'txtNombre',
     titulo:'nombre del producto'
 
    },
    {
 
     id:'txtDescripccion',
     titulo:'descripccion del producto'
 
    },
    {

      id:'txtPrecio',
      titulo:'precio del producto'
  
     }
     
 ];

  return (
    <div className="App">
      <br/>
      <br/>
      <br/>
      <br/>
      <hr/>
      <h2 className='letras'>introduzca los datos</h2>
      <InputCardContainer obj={INPUTS_VENTAS}/>
      <input type='button'value='agregar' onClick={agregarv2 } ></input>
      <header className="App-header">
    <h1>Mis productos</h1>
    <div className="cards-container">

    {datos.map((obj,index) => (
      
      <>
      <CardV2  key={index} titulo={obj[0].titulo}
       descripcion = {obj[0].descripcion}
        precio = {obj[0].precio}></CardV2>
      
      </>
))

  }

      </div>
      </header>
      <div>
        <p className='total'>total de compra $</p>
        <p className='total'>{total}</p>

      </div>
    </div>
  );
}

export default App;
