import React from "react";

function AForm({title,children, ...props}){
    return(
        <div className="w-100">
            <h2 className={"text-white"}>{title}</h2>
            <form action="" >
                {children}
            </form>
        </div>

    );
}

export default AForm;