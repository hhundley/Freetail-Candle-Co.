import React from 'react';
import spotify from '../assets/spotify.svg';
import instagram from '../assets/instagram.svg';
import youtube from '../assets/youtube.svg';


function Footer() {
    return(
        <footer className="animate__animated animate__fadeInUp">
        <div className="container d-flex justify-content-center py-5">
            <div className="mx-2" style = {{paddingRight:'20vw'}}>
            <a href="https://www.instagram.com/hunter_hundley/" target="_blank" rel="noopener noreferrer"><img src={spotify} id="spotify" alt="spotify" /></a>
            </div>
            <div className="mx-2">
            <a href="https://www.instagram.com/hunter_hundley/" target="_blank" rel="noopener noreferrer"><img src={instagram} className="icon" alt="instagram" /></a>
            </div>
            <div className="mx-2" style = {{paddingLeft:'20vw'}}>
            <a href="https://www.instagram.com/hunter_hundley/" target="_blank" rel="noopener noreferrer"><img src={youtube} id="youtube" alt="youtube" /></a>
            </div>
          
        </div>

        <div className="text-center text-black p-2" id="copy">
            © 2023 Freetail Candle Co.
        </div>
    
        </footer>
    );
}

export default Footer;