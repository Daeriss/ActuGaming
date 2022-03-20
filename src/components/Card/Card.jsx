import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

function Card({title, body, image, ...props}){
    return(
        <div className="card m-3 h-20">
            <h3 className="card-header">title</h3>
            <div className="w-100 h-100" style={{backgroundImage: "url : {image}"}}></div>
            <img src={image} style={{width:"10rem", height:"10rem"}}/>
            <div className="card-body">
                <p className="card-text">{body}</p>
            </div>
            <div className="card-footer text-muted">
                2 days ago
            </div>
        </div>
    );
}

export default Card