import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

function Abutton({label, ...props}){
    return(
        <button type="button" className="btn mt-3" style={{backgroundColor: "#B37474", color: "white"}}>{label}</button>
    );
}

export default Abutton