import React from "react";
import sp from "./saphir.png";
import PreviewArticles from "../../components/PreviewArticles/PreviewArticles";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import Carousel from "../../components/Carousel/Carousel";

function HomePage() {
    return(

        <div className="row g-0" style={{flexDirection: "column", width: '100%'}} >
            <div className="d-flex" style={{width: '100%'}}>
                <Carousel/>
            </div>
            <div className="d-flex" style={{flexDirection: 'row'}}>

                <img src={sp} style={{marginRight: "2rem", marginLeft: "2rem"}}/>
                <PreviewArticles/>
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="KarmineCorp"
                    options={{height: 400}}/>

            </div>

        </div>

    )
}

export default HomePage;