import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

function Card({title, body, image,text,date, ...props}){

    return(
        <div className="card m-3 h-20" style={{height: '95%'}}>
            <h3 className="card-header">{title}</h3>
            <div  style={{ backgroundImage:`url("`+ image +`")`, backgroundPosition:"center", backgroundSize:"cover", width:"100%",height:"20rem"}}>
            </div>
            <div className="card-body">
                <p className="card-text">{body}</p>
            </div>
            <div className="card-footer text-muted">
                {date}
            </div>
        </div>
    );
}

export default Card