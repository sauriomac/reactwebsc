import styled from 'styled-components';


export const ProductContainer = styled.div`
    width:100vw;
    min-height:100vh;
    padding:3rem ;
    background: #150f0f;
    color:#fff;
`;


export const ProductBox = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    grid-template-rows:3;
    justify-content:center;
    gap:3;
    margin:0 auto;

    @media screen and (max-width:650px){
        display:flex;
        flex-wrap:wrap;
        justify-content:center;

    }
`;



export const ProductHeading = styled.h1`
    font-size:3rem;
    text-align:center;
    margin-bottom:5rem;
   
   

`;


export const ProductCard = styled.div`
    margin:1rem ;
    line-height:2;
    

`;

export const ProductTitle = styled.h2`
    font-weight:400;
    font-size:1.3rem;

`;

export const ProductImg = styled.img`
    height: 200px;
    min-height:200px;
    max-height:100%;
    margin-left:30px;
    
`;

export const ProductInfo = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:2rem;
    text-align:center;
    
    `;

export const ProductDesc = styled.p`
    margin-bottom: 1rem;
    font-size:0.9rem;
`;
   
export const ProductPrice = styled.p`
    margin-bottom: 1rem;
    font-size:2rem;
`;

export const ProductBtn = styled.button`
  font-size:1rem;
  padding:1rem 4rem;
  border:none;
  background:#e32837;
  color:#fff;
  transition: 02s ease-out;

  &:hover {
      background:#ffc500;
      transition:0.2 ease-out;
      cursor:pointer;
      color:#000;
  }
`;
    