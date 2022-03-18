import React from "react";
import PreviewArticle from "../PreviewArticle/PreviewArticle";

function PreviewArticles(){
    return(
        <div className="d-flex flex-column justify-content-around">
            <PreviewArticle/>
            <PreviewArticle/>
        </div>

    );
}

export default PreviewArticles