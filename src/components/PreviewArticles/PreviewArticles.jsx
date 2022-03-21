import React from "react";
import PreviewArticle from "../PreviewArticle/PreviewArticle";

function PreviewArticles(){
    return(
        <div className="d-flex flex-column justify-content-around">
            <PreviewArticle image={"https://s2.qwant.com/thumbr/0x380/e/2/dc33d9f988281aabaecfb926c515590d73b136c336dbee2780a0348a977d46/Civ6_Review_01.jpg?u=https%3A%2F%2Fwww.gameaxis.com%2Fwp-content%2Fuploads%2F2016%2F12%2FCiv6_Review_01.jpg&q=0&b=1&p=0&a=0"} id={"7"}/>
            <PreviewArticle image={"https://s1.qwant.com/thumbr/0x380/1/c/9e8197bf0e81fdce3d4bea8621f0adbdf3f27b49570891886043dd4e49a565/Binding-of-Isaac.jpg?u=https%3A%2F%2Fbleedingcool.com%2Fwp-content%2Fuploads%2F2017%2F03%2FBinding-of-Isaac.jpg&q=0&b=1&p=0&a=0"} id={"8"}/>
        </div>

    );
}

export default PreviewArticles