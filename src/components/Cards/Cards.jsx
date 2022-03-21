import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Card from "../Card/Card";
import { useState, useEffect } from 'react';
import mk from "./mk.png";
import LinearProgress from '@mui/material/LinearProgress';
import customJson from "../../json/Articlesgenerated.json";
import ALink from "../Atomic/ALink";

function Cards(){

    let [posts, setPosts] = useState(null)

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!posts) {
                // fetch("../../json/Articlesgenerated.json")
                //     .then(res => res.text())
                //     .then(data => console.log(data))
               setPosts(customJson);
            }

        }, 1000)
        return () => clearTimeout(timer)
    })

    const postsState = () => {
        if (!posts) {
            return(
                <LinearProgress />
            )
        }else {
            return(
                <div className="d-flex flex-wrap justify-content-between">
                    {posts.map((post, index)=> {
                        return (
                            <ALink key={post.index} bClass={"col-4 h-20"} styles={{textDecoration: "none", color: "black"}} to={"/article/"+ post.index}>
                                <Card title={post.title} body={post.preview} image={post.picture} id={post.index} text={post.text} date={post.date}/>
                            </ALink>
                        )
                    })}
                </div>
            )
        }
    }

    return(
            postsState()
    );
}

export default Cards