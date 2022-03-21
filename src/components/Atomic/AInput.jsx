import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

function AInput({label, type, ...props}) {
    return(
        <div className="d-flex flex-column">
            <label style={{color:"#884A65"}} className="col-form-label mt-4 text-start ">{label}</label>
            <input className="form-control" type={type}/>
        </div>
    );
}

export default AInput;