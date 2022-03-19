import React from "react";

/**
 * les params du style par défaut sont :
 * borderColor = "black", borderLeft= " 1px solid", *
 * height= "4rem", display= "inline-block", marginTop="1rem"
 * pour tout modification du style veuillez utiliser les balises par défaut
 * @param styles Style personnalisé écriture demandé : styles={{borderColor : "red"}}
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function ABarreVertical(styles,...props) {


    let styleCustom = {
        borderColor : "black",
        borderLeft: " 1px solid",
        height: "4rem",
        display: "inline-block",
        marginTop: "1rem"
    };


    if (styles.styles){
        styleCustom = styles.styles;
        if(!styleCustom.borderColor)
            styleCustom.borderColor = "black";
        if (!styleCustom.borderLeft)
            styleCustom.borderLeft= " 1px solid";
        if (!styleCustom.height)
            styleCustom.height= "4rem";
        if (!styleCustom.display)
            styleCustom.display= "inline-block";
        if (!styleCustom.marginTop)
            styleCustom.marginTop="1rem";

    }



    return(
        <span style={styleCustom}></span>
    )
}

export default ABarreVertical;