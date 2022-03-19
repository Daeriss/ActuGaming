import React from "react";
import Team from "../../components/Team/Team";

function AboutPage() {

    return(
        <div className="container-fluid p-3 ">
            <h2 className="mb-3">Le projet</h2>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt olor sit amet</p>
            <p className="mb-3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt olor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt olor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt olor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt olor sit amet.</p>
            <h2 className="mb-3">L'équipe</h2>
            <Team className="mb-3"/>
        </div>
    )
}

export default AboutPage;