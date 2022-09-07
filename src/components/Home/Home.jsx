import React from 'react'
import { Home1, Home2 } from './HomeElements'
import s from './Home.module.css'
import {Link} from 'react-router-dom'
import data from '../../data'
import Cards from '../Products/Cards'

const Home = () => {
  return (
    <div>
        <Home1 className={s.home1}>
            <h1>
                 <span>SUNSET ARG</span>
            </h1>
            <h2>
                QUE MODELO VAS A<br/> ELEGIR PRIMERO?
            </h2>
        </Home1>
        <Home2>
            <div className={s.products}>
                <Link to='/products' className={s.products2}>
                ALGUNOS PRODUCTOS 
                </Link>
            </div>
            <Cards glasses={data} />
        </Home2>
    </div>
  )
}

export default Home