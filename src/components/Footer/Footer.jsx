import React from "react";
import ALink from "../Atomic/ALink";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import 'bootstrap/dist/css/bootstrap.css';
import ABarreVertical from "../Atomic/ABarreVertical";


function Footer(){
    return(
        <div style={{backgroundColor:"#884A65",left: 0,bottom: 0}} className=" d-flex justify-content-around w-100">
            <div className="col-5 d-flex flex-column align-items-end mt-3 mb-3">
                <ALink to={"/mentionLegal"} styles={{textDecoration: "none", color: "white"}}>Mentions Légale</ALink>
                <ALink to={"/about"} styles={{textDecoration: "none", color: "white"}}>A propos</ALink>
                <ALink to={"/contact"} styles={{textDecoration: "none", color: "white"}}>Nous contacter</ALink>
            </div>
            <ABarreVertical />
            <div className="col-5 d-flex align-items-center">
                <TwitterIcon style={{marginRight:"2rem", color: "white"}} fontSize="large"/>
                <FacebookIcon  style={{marginRight:"2rem", color: "white"}} fontSize="large"/>
                <LinkedInIcon  style={{marginRight:"2rem", color: "white"}} fontSize="large"/>

            </div>
        </div>
    );
}

export default Footer