import React from "react";
import style from './Card.module.css'

export default function Card(props) {
    // acá va tu código
    return <div className={style.card}> 
      <img src={props.img} alt="tarjeta" className={style.image} /><br/>
      <button className='button' onClick={props.onClose}>{props.colores} colores</button>
      <h2 className='title'>{props.name}</h2>
      <h2 className="precio">Precio: {props.precio}</h2>
    </div>
  };  