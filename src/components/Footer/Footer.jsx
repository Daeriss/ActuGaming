import React from "react";
import ALink from "../Atomic/ALink";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import 'bootstrap/dist/css/bootstrap.css';


function Footer(){
    return(
        <div style={{backgroundColor:"#EE9F9F", position:"fixed" ,left: 0,bottom: 0}} className="container-fluid d-flex justify-content-around ">
            <div className="col-5 d-flex flex-column align-items-end mt-3 mb-3">
                <ALink to={"mentionLegal"} styles={{textDecoration: "none", color: "black"}}>Mentions Légale</ALink>
                <ALink to={"/about"} styles={{textDecoration: "none", color: "black"}}>A propos</ALink>
                <ALink to={"/contact"} styles={{textDecoration: "none", color: "black"}}>Nous contacter</ALink>
            </div>
            <span style={{borderLeft: "1px solid black", height: "4rem", display: "inline-block",marginTop:"1rem"}}></span>
            <div className="col-5 d-flex align-items-center">
                <TwitterIcon style={{marginRight:"2rem"}} fontSize="large"/>
                <FacebookIcon  style={{marginRight:"2rem"}} fontSize="large"/>
                <LinkedInIcon  style={{marginRight:"2rem"}} fontSize="large"/>

            </div>
        </div>
    );
}

export default Footer