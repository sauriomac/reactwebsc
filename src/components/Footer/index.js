import React from 'react';

import navimg from '../../images/logo.png';
import { FooterCont, FooterImg } from './Footer.js';

const Footer = () => {
    return (
        <div>
            <FooterCont>
                <FooterImg src={navimg}/>
            </FooterCont>
        </div>
    )
}

export default Footer

