import React from "react";
import mk from "./mk.png";
import ALink from "../Atomic/ALink";

function PreviewArticle({image, id, ...props}){
    return(
        <ALink bClass={" h-20 d-flex"} styles={{textDecoration: "none", color: "black"}} to={"/article/"+ id}>
            <img src={image} style={{width:"10rem", height:"10rem", marginRight:"3rem"}}/>
            <div>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt olor sit amet.</p>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eosr sit amet.</p>
            </div>
        </ALink>
    );
}

export default PreviewArticle