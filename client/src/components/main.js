import React from 'react';
import juniper from '../../src/assets/Juniper.png';
import scarlet from '../../src/assets/Scarlet.png';
import sandalwood from '../../src/assets/Sandalwood.png';

function Main() {
    return(
        <div className="text-center d-flex flex-wrap" id="copy" style={{justifyContent:"center"}}>
            <figure>
            <img style={{height:"300px", margin:"50px"}} src={juniper} alt="juniper product"></img>
            <figcaption>Ashe Juniper Incense Sticks<br></br>$5.00</figcaption>
            </figure>
            <figure>
            <img style={{height:"300px",margin:"50px"}} src={scarlet} alt="scarlet product"></img>
            <figcaption>Scarlet Incense Sticks<br></br>$6.00</figcaption>
            </figure>
            <figure>
            <img style={{height:"300px",margin:"50px"}} src={sandalwood} alt="sandalwood product"></img>
            <figcaption>Sandalwood Incense Sticks<br></br>$5.00</figcaption>
            </figure>
        </div>
    );
}

export default Main;