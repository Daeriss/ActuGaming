import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Card from "../Card/Card";
import { useState, useEffect } from 'react';
import mk from "./mk.png";
import LinearProgress from '@mui/material/LinearProgress';
import customJson from "../../json/Articlesgenerated.json";
import ALink from "../Atomic/ALink";
import AForm from "../Atomic/AForm";
import AInput from "../Atomic/AInput";
import AButton from "../Atomic/AButton";
import ABlock from "../Atomic/ABlock";

function Cards(){

    let [posts, setPosts] = useState(null);
    let [input, setInput] = useState("");

    useEffect(() => {
        if(input === ""){
            const timer = setTimeout(() => {
                if (!posts) {
                    // fetch("../../json/Articlesgenerated.json")
                    //     .then(res => res.text())
                    //     .then(data => console.log(data))
                    setPosts(customJson);
                }

            }, 1000)
            return () => clearTimeout(timer)
        }


    })

    function inputHandler(e){
        setInput(e.target.value);

        let objTmp = [];

        customJson.map( post =>{
            if(post.title.indexOf(e.target.value) >= 0)
                objTmp = [...objTmp, post];
        })

        if(objTmp.length > 0)
            setPosts(objTmp);
    }


    const postsState = () => {
        if (!posts) {
            return(
                <LinearProgress />
            )
        }else {
            return(
                <div>

                    <div className="d-flex flex-wrap justify-content-between align-items-end">
                        <h1>Articles Page</h1>
                        <ABlock styles={{width:"50%", border : "none", display: "flex", flexDirection: "column", alignItems: "flex-end"}}>
                            <AForm>
                                <div className="d-flex flex-column">
                                    {/*<div className="d-flex">*/}
                                    {/*    <label className="col-form-label mt-4 text-start">Recheche</label>*/}
                                    {/*</div>*/}
                                    <div className="d-flex">
                                        <input className="form-control" type="text" placeholder="Recherche titre article"
                                               onChange={(event) => (inputHandler(event))} value={input} />
                                    </div>


                                </div>
                            </AForm>
                        </ABlock>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between">
                        {posts.map((post, index)=> {
                            return (
                                <ALink key={post.index} bClass={"col-4 h-20"} styles={{textDecoration: "none", color: "black"}} to={"/article/"+ post.index}>
                                    <Card title={post.title} body={post.preview} image={post.picture} id={post.index} text={post.text} date={post.date}/>
                                </ALink>
                            )
                        })}
                    </div>
                </div>

            )
        }
    }

    return(
            postsState()
    );
}

export default Cards