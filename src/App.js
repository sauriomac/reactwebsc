import React from 'react'
import {BrowserRouter as Router } from 'react-router-dom';
import {Productdata, Productdata2} from './components/NavBar/data';
import   Navbar from './components/Navbar.jsx'
import Page from './components/Page/index.js';
import Products from './components/Products/index.js';
import { GlobalStyle } from './GlobalStyles.js';
import Freature from './components/Frea';
import Footer from './components/Footer/index';


function App() {
  return (
    <Router>
      <GlobalStyle />
        <Page />
       <Products heading='Choose your favorite' data={Productdata}/>
       <Freature />
       <Products heading='other favorite for you' data={Productdata2}/>
       <Freature />
       <Footer/>
    </Router>

  );
}

export default App;
