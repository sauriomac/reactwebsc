import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { GiSushis } from 'react-icons/gi';

export const Nav =styled.nav`
    background: transparent;
    height:100px;
    display:flex;
    justify-content:center;
    font-weight:700;


`;
export const NavLink = styled(Link)`
    color: #ffff;
    font-size:2rem;
    display: flex;
    align-items:center;
    text-decoration: none;
    cursor: pointer;

    @media screen and (max-width: 400px){
        position: absolute;
        top:10px;
        left:25px;

        
    }
`
export const NavIcon = styled.div`
    display: block;
    position:absolute;
    top:0;
    right:0;
    cursor:pointer;
    color:#fff;

    p{
        transform: translate(-175%, 100%);
        font-size:bold;
        
    }

  /* ... */
`;

export const Bar = styled(GiSushis)`
  font-size:3rem;
  transform:translate(-50%, 15%);
  margin-top:-12px;
`;

export const NavImg = styled.img`
    height: 50px;
    min-height:50px;
    max-height:50%;
    
`;


