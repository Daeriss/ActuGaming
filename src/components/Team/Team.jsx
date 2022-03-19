import React from "react";
import TeamMember from "../TeamMember/TeamMember";
import me from "./me.png";
import fez from "./fez.png";

function Team(){
    var descAlex ="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt olor sit amet."
    var descMaeva ="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt olor sit amet."

    return(
        <div>
            <TeamMember name={"Alexandre"} image={me} desc={descAlex} tol={"https://www.linkedin.com/in/alexandre-caron-6b6911153"}/>
            <TeamMember name={"Maeva"} image={fez} desc={descMaeva} tott={"https://twitter.com/Ellixyr"} tol={"https://www.linkedin.com/in/maeva-zulmea-6b40521b3/"}/>
        </div>

    );
}

export default Team