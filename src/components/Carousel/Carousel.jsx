import React, {useState} from "react";
import './Carousel.css';
import banniere1 from './h.PNG';
import banniere2 from '../../image/banniere2.jpg';
import banniere3 from '../../image/bannierepokemon.png';


function Carousel(){

    let [banner , setBanner] = useState(banniere1);
    let [position, setPossiton] = useState(0);
    let banners = [banniere1, banniere2, banniere3];
    let [textPosition, setTextPosition] = useState("1 /3");
    let textes = ["Mass Effect", "The Elder Scroll", "Pokémon"]
    let [texteBanner, setTexteBanner] = useState(textes[0]);

    function showSlides(n) {

        let tmpValue = position;

        if (n ==="up"){
            tmpValue += 1;

            if (3 <= tmpValue) {
                tmpValue = 0;
            }

            setPossiton(Number.parseInt(tmpValue));
            setTextPosition(((tmpValue+1) +" / " + banners.length))
            setBanner(banners[tmpValue]);
            setTexteBanner(textes[tmpValue]);

        }else if (n ==="down") {
            tmpValue -=1;
        }

        if (0 >tmpValue) {
            tmpValue = 2;

            setPossiton(Number.parseInt(tmpValue));
            setTextPosition(((tmpValue+1) +" / " + banners.length))
            setBanner(banners[tmpValue]);
            setTexteBanner(textes[tmpValue]);

        }else {
            setPossiton(n);
            setTextPosition(((n+1) +" / " + banners.length))
            setBanner(banners[n]);
            setTexteBanner(textes[n]);
        }
    }

    return(
        <div  className="rounded-3 border border-2 carouselCSS slideshow-container">
            <div className="d-flex flex-column-reverse align-items-center" style={{justifyContent: "end", backgroundImage:`url("`+ banner +`")`, backgroundPosition:"center", backgroundSize:"cover", height:"20rem",width:"100%"}}>
                <div style={{textAlign:"enter"}}>
                    <span className="dot" onClick={() => showSlides(0)}></span>
                    <span className="dot" onClick={() => showSlides(1)}></span>
                    <span className="dot" onClick={() => showSlides(2)}></span>
                </div>
                <div className="text">{texteBanner}</div>
            </div>
            <a className="prev" onClick={() => showSlides("down")}>&#10094;</a>
            <a className="next" onClick={() =>showSlides("up")}>&#10095;</a>
        </div>
    )
}

export default Carousel;