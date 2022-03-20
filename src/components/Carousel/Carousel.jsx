import React, {useState} from "react";
import './Carousel.css';
import banniere1 from '../../image/banniere1.png'
import banniere2 from '../../image/banniere2.jpg'
import banniere3 from '../../image/bannierepokemon.png'


function Carousel(){

    let [showCurrentSlide, setShowCurrentSlide] = useState(1);
    let [slideIndex, setSlideIndex] = useState(1);
    //showSlides(slideIndex);

    function plusSlides(n) {



        console.log((slideIndex))
        console.log((slideIndex + n))
        setSlideIndex( (slideIndex) => (slideIndex+n))
        console.log((slideIndex))
        setShowCurrentSlide((slideIndex));




        //showSlides(slideIndex += n);
    }
    function moinsSlides(n) {


        console.log((slideIndex))
        console.log((slideIndex + n))
        setSlideIndex((slideIndex) => (slideIndex+n))
        console.log((slideIndex))
        setShowCurrentSlide((slideIndex));




        //showSlides(slideIndex += n);
    }


    function currentSlide(n) {
        setSlideIndex((n))
        setShowCurrentSlide((n));
        //showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            //slides[i].style.display = "none";
            console.log(slides[i])
        }
        for (i = 0; i < dots.length; i++) {
            //dots[i].className = dots[i].className.replace(" active", "");
            console.log(dots[i])
        }
        //slides[slideIndex-1].style.display = "block";
        //dots[slideIndex-1].className += " active";
        console.log(slides[slideIndex-1])
        console.log(dots[slideIndex-1])
    }

    return(
        <div className={["rounded-3", "border", "border-2", "carouselCSS"].join(" ")}>

            <div className="slideshow-container">
                { 1 === showCurrentSlide ?
                    <div className=" ">
                        <div className="number-text">1 / 3</div>
                        <img src={banniere1} className="banniereStyle"  />
                        <div className="text">Caption Text</div>
                    </div> : null
                }

                { 2 === showCurrentSlide ?
                    <div className=" ">
                        <div className="number-text">2 / 3</div>
                        <img src={banniere2} className="banniereStyle"/>
                        <div className="text">Caption Two</div>
                    </div> : null
                }

                { 3 === showCurrentSlide ?
                    <div className=" ">
                        <div className="number-text">3 / 3</div>
                        <img src={banniere3} className="banniereStyle" />
                        <div className="text">Caption Three</div>
                    </div> :null

                }




                {/*{ 1 < showCurrentSlide ?*/}
                {/*    <a className="prev" onClick={() => moinsSlides(-1)}>&#10094;</a>*/}
                {/*    :null*/}
                {/*}*/}
                {/*{ 3 > showCurrentSlide ?*/}
                {/*    <a className="next" onClick={() =>plusSlides(1)}>&#10095;</a>*/}
                {/*    : null*/}
                {/*}*/}



            </div>
            <br />

            <div style={{textAlign:"enter"}}>
                <span className="dot" onClick={() => currentSlide(1)}></span>
                <span className="dot" onClick={() => currentSlide(2)}></span>
                <span className="dot" onClick={() => currentSlide(3)}></span>
            </div>


        </div>

    )
}

export default Carousel;