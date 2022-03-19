import React from "react";

/**
 *
 * @param children
 * @param styles Parametre optionel : Contient le style personnaliser
 * @param classNames List des className du Block
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function ABlock({children, styles, classNames, ...props}) {

    let defaultStyle= {
        border: "1px solid black"
    }

    return(
        <div style={typeof styles === "undefined"? defaultStyle : styles }>
            {children}
        </div>
    )
}

export default ABlock