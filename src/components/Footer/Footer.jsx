import React from "react";
import ALink from "../Atomic/ALink";
import TwitterIcon from '@mui/icons-material/Twitter';


function Footer(){
    return(
        <div style={{backgroundColor:"#EE9F9F"}}>
            <div>
                <ALink to={"mentionLegal"}>Mentions Légale</ALink>
                <ALink to={"/about"}>A propos</ALink>
                <ALink to={"/contact"}>Nous contacter</ALink>
            </div>
            <div>
                <TwitterIcon/>
            </div>
        </div>
    );
}

export default Footer