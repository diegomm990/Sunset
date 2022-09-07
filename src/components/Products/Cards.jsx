import React from 'react';
import Card from './Card.jsx';
import style from './Cards.module.css'

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  return <div className={style.container}>
    {props.glasses.map(glass => 
    <Card 
    name={glass.name} 
    img={glass.imagen}
    colores={glass.colores}
    precio={glass.precio}
    onClose = { ()=> alert(glass.name)}
    key = {glass.name}
     />)}
  </div>
};