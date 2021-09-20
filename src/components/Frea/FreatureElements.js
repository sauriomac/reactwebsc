import styled from 'styled-components'
import FreauturePhoto from '../../images/banner.jpg'

export const FreatureContainer = styled.div`
  background:linear-gradient(to right, rgba(0,0,0,0.7),
  rgba(0,0,0,0.7)
  ), url(${FreauturePhoto});
  height: 100vh;
  max-height:500px;
  width:100vw;
  background-position: center;
  background-size:cover;
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  color:#fff;
  text-align:center;
  padding:0;
 


  h1 {
      font-size: clamp(3rem, 5vw, 5rem)

  }

  p {
      margin-bottom: 1rem;
      font-size: clamp(1rem, 1.5vw, 2rem);
      margin-right:1rem;
      margin-left:1rem;


  }
`;


export const FreatureButton= styled.button`
    font-size: 1.4rem;
    padding: 0.6rem 3rem;
    border:none;
    background: #ffc500;
    color:#000;
    transition:02s ease-out;
    cursor:pointer;


    &:hover {
        color:#fff;
        background:#e31837;
        transition: 0ms.2s ease-out;
        cursor:pointer;
        }

`;

