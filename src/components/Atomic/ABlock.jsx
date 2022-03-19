import React from "react";

/**
 *
 * @param children
 * @param defaultStyleBoolean Boolean qui détermine si on utilise le style par défaut
 * @param styles Contient le style personnaliser
 * @param classNames List des className du Block
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function ABlock(children, defaultStyleBoolean, styles, classNames, ...props) {

    let defaultStyle= {
        border : "1px 1px 1px 1px solid black"
    }

    return(
        <div style={defaultStyleBoolean? defaultStyle : styles} className={classNames}>
            {children}
        </div>
    )
}

export default ABlock