import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Card from "../Card/Card";
import { useState, useEffect } from 'react';
import mk from "./mk.png";
import LinearProgress from '@mui/material/LinearProgress';
import json from "../../json/Articlesgenerated.json"
import ALink from "../Atomic/ALink";
function Cards(){

    let [posts, setPosts] = useState(null)

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!posts) {
                fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(res => res.json())
                    .then(data => setPosts(data))
            }
        }, 2000)
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
                    {posts.map(post=> {
                        return (
                            <ALink bClass={"col-4 h-20"} styles={{textDecoration: "none", color: "black"}} to={"/article/"+ post.id }>
                                <Card title={post.title} body={post.body} image={mk} id={post.id}/>
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