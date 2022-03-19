import React from "react";
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import 'bootstrap/dist/css/bootstrap.css';



function TeamMember({image,name,desc,tott,tol, ...props}){
    return(
        <div className="container-fluid d-flex mb-3 p-0">
            <img src={image} className="col-3" style={{width:"10rem", height:"10rem", marginRight:"3rem"}}/>
            <div className="col-9 d-flex flex-column m-3">
                <h3 className="mb-2">{name}</h3>
                <p className="mb-2">{desc}</p>
                <div className="d-flex ">
                    <a style={{textDecoration: "none", color: "black"}} href={tott}><TwitterIcon style={{}} fontSize="medium"/></a>
                    <a style={{textDecoration: "none", color: "black"}} href={tol}><LinkedInIcon  style={{}} fontSize="medium"/></a>
                </div>
            </div>
        </div>
    );
}

export default TeamMember