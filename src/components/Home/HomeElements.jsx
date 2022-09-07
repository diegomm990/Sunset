import styled from 'styled-components'
import image from './HomeMod1.jpg'
import image2 from './Phone.jpg'

export const Home1 = styled.div`
    background-image: url(${image});
    align-items: center;
    text-align: left;
    width: 100%;
    height: 540px;
    padding-top: 200px;
    padding-left: 30px;
    transition: all 1s ease-in-out;
    &:hover {
        padding-left: 80px;
        transition: all 1s ease-in-out;
    }
    @media screen and (max-width: 768px){
        background-image: url(${image2});
        height: 440px;
        padding-top: 9rem;
        padding-left: 2rem;
        &:hover {
            padding-top: 9rem;
            padding-left: 2rem;
        }
    }
`   
export const Home2 = styled.div`
    margin-top:
    background-color: white;
    height: 900px;
    align-items: center;
    text-align: center;
`