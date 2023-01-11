import React from 'react';
import juniper from '../../src/assets/Juniper.png';
import scarlet from '../../src/assets/Scarlet.png';
import sandalwood from '../../src/assets/Sandalwood.png';

function Main() {
    return(
        <div className="text-center" id="copy">
            <img style={{height:"300px", margin:"50px"}} src={juniper} alt="juniper product"></img>
            <img style={{height:"300px",margin:"50px"}} src={scarlet} alt="scarlet product"></img>
            <img style={{height:"300px",margin:"50px"}} src={sandalwood} alt="sandalwood product"></img>
        </div>
    );
}

export default Main;