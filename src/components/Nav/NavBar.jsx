import React, { Component } from 'react'
import Logo from './logo.jpg'
import s from './Nav.module.css'
import {Nav, NavLink,  NavMenu,  Cart} from './NavElements'
class NavBar extends Component {
  state= {clicked: false}
  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
    
  }

  render() {return (
          <Nav className={s.bignav}>
            <NavLink to='/'>
              <img src={Logo} alt='logoSunset' className={s.logo} />
            </NavLink>
            <div className={s.celmenu}>
              <Cart className={s.btncart} />
              <div onClick={this.handleClick} className={s.btnmenu}> 
                <i className={this.state.clicked ? 'fas fa-times' :  'fas fa-bars'}> </i>
              </div>
            </div>
            <NavMenu className={this.state.clicked ? s.navmenu : s.navmenuin}> 
              <NavLink to='/' className={s.home}>
                 Home
              </NavLink>
              <NavLink to='/products' className={s.navlinks} >
                Products
              </NavLink>
              <NavLink to='/contact' className={s.navlinks} >
                Contact
              </NavLink>
              <NavLink to='/aboutus' className={s.navlinks} >
                About Us
              </NavLink>
              <Cart className={s.btncartt}/>
            </NavMenu>
            {/* Boton de Login  */}
            {/* <NavBtn>
              <NavBtnLink to='/signin'>Sign In</NavBtnLink>
            </NavBtn> */}
          </Nav>
  )}
}

export default NavBar