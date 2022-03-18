import React from "react";
import mk from "./mk.png";

function PreviewArticle(){
    return(
        <div className="d-flex container-fluid">
            <img src={mk} style={{width:"10rem", height:"10rem", marginRight:"3rem"}}/>
            <div>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt olor sit amet.</p>

                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eosr sit amet.</p>

            </div>
        </div>
    );
}export default PreviewArticle