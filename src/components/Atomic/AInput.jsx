import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

function AInput({label, type, ...props}) {
    return(
        <div className="container-fluid d-flex flex-column">
            <label className="col-form-label mt-4 text-start">{label}</label>
            <input className="form-control" type={type}/>
        </div>
    );
}

export default AInput;