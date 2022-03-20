import React from "react";
import { useParams } from 'react-router-dom';

function ArticlePage() {
    const { id } = useParams();
    return(
        <div className="p-4">
            <h1>Article Page</h1>
            <p>id: {id}</p>
        </div>
    )
}

export default ArticlePage;