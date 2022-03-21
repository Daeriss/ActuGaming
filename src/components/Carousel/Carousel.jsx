import React, {useState} from "react";
import './Carousel.css';
import banniere1 from '../../image/banniere1.png'
import banniere2 from '../../image/banniere2.jpg'
import banniere3 from '../../image/bannierepokemon.png'


function Carousel(){

    let [showCurrentSlide, setShowCurrentSlide] = useState(1);
    let [slideIndex, setSlideIndex] = useState(1);
    let [banner , setBanner] = useState(banniere1);





    function plusSlides(n) {

        console.log('avant incr : ' + slideIndex)
        setSlideIndex(3)
        console.log('après incr : ' + slideIndex)
        showSlides(slideIndex);

    }


    function currentSlide(n) {
        setSlideIndex((n))
        setShowCurrentSlide((n));
        //showSlides(slideIndex = n);
    }

    function showSlides(n) {

        switch (n) {

            case 1 :
                setBanner(banniere1);
                setShowCurrentSlide(1);
                break;
            case 2 :
                setBanner(banniere2);
                setShowCurrentSlide(2);
                break;
            case 3:
                setBanner(banniere3);
                setShowCurrentSlide(3);
                break;
            default :
                setBanner(banniere1);
                setShowCurrentSlide(1);
                break;

        }
    }

    return(
        <div className={["rounded-3", "border", "border-2", "carouselCSS"].join(" ")}>

            <div className="slideshow-container">

                <div className=" ">
                    <div className="number-text">1 / 3</div>
                    <img src={banner} className="banniereStyle"  />
                    <div className="text">Caption Text</div>
                </div>

                <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
                <a className="next" onClick={() =>plusSlides(1)}>&#10095;</a>





            </div>
            <br />

            <div style={{textAlign:"enter"}}>
                <span className="dot" onClick={() => showSlides(1)}></span>
                <span className="dot" onClick={() => showSlides(2)}></span>
                <span className="dot" onClick={() => showSlides(3)}></span>
            </div>


        </div>

    )
}

export default Carousel;