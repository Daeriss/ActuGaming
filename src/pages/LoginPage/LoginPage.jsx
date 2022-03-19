import React from "react";
import ABlock from "../../components/Atomic/ABlock";
import AForm from "../../components/Atomic/AForm";
import AInput from "../../components/Atomic/AInput";
import ABarreVertical from "../../components/Atomic/ABarreVertical";
import AButton from "../../components/Atomic/AButton";


function LoginPage() {
    return(
        <div className="row g-0 justify-content-center align-items-center"
             style={{marginTop: "5em"}} >
            <ABlock styles={{border: "none", width: "50%" }} >
                <ABlock styles={{border: "1px solid black",
                    display: "flex", justifyContent: "space-evenly"
                    }} >
                    <ABlock styles={{border : "none"}}>
                        <AForm title="Connexion">
                            <AInput label="Adresse mail" type="text"/>
                            <AInput label="Mot de passe" type="text"/>
                            <AButton styles={{border: "1px solid #707070", borderRadius: ".5em",
                                outline: "none",
                                background: "inherit",
                                marginTop: "1em"}}>
                                Envoyer
                            </AButton>
                        </AForm>
                    </ABlock>
                    <ABarreVertical styles={{height: "29rem"}}/>
                    <ABlock styles={{border : "none"}}>
                        <AForm title="Inscription">
                            <AInput label="Nom Prénom" type="text"/>
                            <AInput label="Adresse mail" type="text"/>
                            <AInput label="Mot de passe" type="text"/>
                            <AInput label="Confirmation mot de passe" type="text"/>
                            <AButton styles={{border: "1px solid #707070", borderRadius: ".5em",
                                outline: "none",
                                background: "inherit",
                                marginTop: "1em"}}>
                                Envoyer
                            </AButton>
                        </AForm>
                    </ABlock>
                </ABlock>
            </ABlock>
        </div>
    )
    
}

export default LoginPage;