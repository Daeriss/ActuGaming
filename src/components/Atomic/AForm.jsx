import React from "react";

function AForm({title,children, ...props}){
    return(
        <div  className="w-50">
            <h2>{title}</h2>
            <form action="" >
                {children}
            </form>
        </div>

    );
}

export default AForm;