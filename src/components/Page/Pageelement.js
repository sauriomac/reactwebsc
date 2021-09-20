import styled from 'styled-components';
import ImgBg from '../../images/Back.jpg';

export const PageContainer = styled.div`
    background: linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0, 0.1)), url(${ImgBg});
    height: 100vh;
    width:100vw;
    background-position:center;
    background-size: cover;
    margin:-1000;
    padding:0;
  /* ... */
`;


export const  Content = styled.div`
  height: cal(100vh -80px);
  max-height:100%;
  width:100%;
  padding: 0;
`;


export const Items = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100vh ;
    max-height:100%;
    padding:1rem 3rem ;
    width:650px;
    color:#fff;
    text-transform:uppercase;
    line-height:1;
    font-weight:bold;

    @media screen and (max-width:650px){
        width:100%;
        padding-left:30px;
        
        
        
       
    }
`;

export const H1Item = styled.h1`
    font-size: clamp(2rem, 6vw, 3.6rem);
    margin-bottom:2rem;
    box-shadow: 3px 5px #e9ba23;
    letter-spacing:4px;
`;



export const ItemP = styled.p`
  font-size:clamp(1rem, 2.5vw, 2rem);
  margin-bottom:2rem;
`;

export const Btn = styled.button`
  font-size: 1.4rem;
  padding:1rem 4rem;
  border:none;
  background:#e31837;
  color: white;
  transition:0.2s ease-out;

  &:hover {
      background:#ffc500;
      transition: 0.2s ease-out;
      cursor: pointer;
      color: white;
  }
`;


