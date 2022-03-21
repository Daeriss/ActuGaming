import React from "react";

function AForm({title,children,titleColor, ...props}){
    return(
        <div className="w-100">
            <h2 style={{color: titleColor}} className="align-self-center">{title}</h2>
            <form action="" >
                {children}
            </form>
        </div>

    );
}

export default AForm;