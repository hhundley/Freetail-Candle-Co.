import React from 'react';
import logo from '../../src/assets/Freetail Candle Co-logos_black.png';

function Header() {

    return (
        <div style={{textAlign: "center", paddingTop:'15px', paddingBottom:'15px'}}>
            <img src={logo} alt="Freetail Logo"></img>
        </div>
    );
}

export default Header;