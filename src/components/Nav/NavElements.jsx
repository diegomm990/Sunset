import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
import { FaShoppingCart} from 'react-icons/fa'

export const Nav = styled.nav`
    
`
export const NavLink = styled(Link)`
    &.active {
        font-weight: bold;
    }
    
`
// export const Bars = styled(FaBars)`
//     display: none;
//     color: white;
//     @media screen and (max-width: 768px){
//         display:block;
//         position: absolute;
//         top: 1.7rem;
//         right: 2rem;
//         transform: translate(-100%; 75%);
//         font-size: 1.8rem;
//         cursor: pointer;
//     }
// `
// export const Times = styled(FaTimes)`
//     color: white;
//     display: none;
//     @media screen and (max-width: 768px){
//         display:block;
//         position: absolute;
//         top: 1.7rem;
//         right: 2rem;
//         transform: translate(-100%; 75%);
//         font-size: 1.8rem;
//         cursor: pointer;
//     }
// `
export const Cart = styled(FaShoppingCart)`
  
`
export const NavMenu = styled.div`
    
`
// export const NavBtn = styled.nav`
//     display:flex;
//     align-items: center;
//     margin-right: 24px;

//     @media screen and (max-width: 768px){
//         display: none
//     }
// `

// export const NavBtnLink = styled(Link)`
//     border-radius: 4px;
//     background: white;
//     padding: 10px 22px;
//     color: black;
//     border: none;
//     outline: none;
//     cursor: pointer;
//     transition: all 0.2s ease-in-out;
//     text-decoration: none;
//     font-weight: bold;
//     &:hover {
//         transition: all 0.2s ease-in-out;
//         background: black;
//         color: white;
//     }
// `