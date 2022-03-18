import React from "react";
import sp from "./saphir.png";
import PreviewArticles from "../../components/PreviewArticles/PreviewArticles";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

function HomePage() {
    return(
        <div className="d-flex container-fluid">
            <img src={sp} style={{marginRight: "2rem", marginLeft: "2rem"}}/>
            <PreviewArticles/>
            <TwitterTimelineEmbed
                sourceType="profile"
                screenName="KarmineCorp"
                options={{height: 400}}
            />

        </div>
    )
}

export default HomePage;