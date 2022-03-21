import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import customJson from "../../json/Articlesgenerated.json";
import ALink from "../../components/Atomic/ALink";
import ABlock from "../../components/Atomic/ABlock";

function ArticlePage() {

    const { id } = useParams();
    let post = customJson[id];
    let image = post.picture;

    let text = JSON.parse(JSON.stringify(post));

    console.log(text.text);


    return(
        <div className="p-4">
            <h1>{post.title}</h1>
            <div className="row g-0">
                <ABlock styles={{border: "none"}} classNames="d-flex">
                    <ALink to="/articles" styles={{ textDecoration: 'none'}}>Retour aux articles</ALink>
                </ABlock>
                <div className={"d-flex "}>
                    <div className={"col-4"} style={{ backgroundImage:`url("`+ image.toString() +`")`, backgroundPosition:"center", backgroundSize:"cover" ,height:"20rem",marginRight:"3rem"}}></div>
                    <div className={"col-7"}>
                        <p style={{whiteSpace: "pre-line", verticalAlign: "bottom"}}>{text.text}</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ArticlePage;