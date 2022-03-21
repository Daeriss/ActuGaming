import React from "react";
import ABlock from "../../components/Atomic/ABlock";
import AForm from "../../components/Atomic/AForm";
import AInput from "../../components/Atomic/AInput";
import ABarreVertical from "../../components/Atomic/ABarreVertical";
import AButton from "../../components/Atomic/AButton";
import "./LoginPage.css";
import "../../App.css";


function LoginPage() {
    return(
        <div className="row g-0 justify-content-center align-items-center"
             style={{marginTop: "5em"}} >
            <ABlock styles={{border: "none", width: "80%" }} >
                <div className={"customBorder"} style={{marginBottom:"4rem", display: "flex"}} >
                    <ABlock styles={{width:"50%", border : "none", display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <AForm title="Connexion">
                            <AInput label="Adresse mail" type="mail"/>
                            <AInput label="Mot de passe" type="password"/>
                            <div className={"d-flex  justify-content-center mb-3"}>
                                <AButton classNames={"btn-sign-in"} styles={{border: "1px solid #707070", borderRadius: ".5em",
                                    outline: "none",
                                    background: "inherit",
                                    marginTop: "11em",
                                    width: "100%"}}>
                                    Envoyer
                                </AButton>
                            </div>
                        </AForm>
                    </ABlock>
                    <ABarreVertical styles={{height: "29rem", borderColor:"#EE9F9F"}}/>
                    <ABlock styles={{width:"50%", border : "none", display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <AForm title="Inscription">
                            <AInput label="Nom Prénom" type="text"/>
                            <AInput label="Adresse mail" type="mail"/>
                            <AInput label="Mot de passe" type="password"/>
                            <AInput label="Confirmation mot de passe" type="password"/>
                            <div className={"d-flex  justify-content-center mb-3"}>
                                <AButton classNames={"btn-sign-in"} styles={{border: "1px solid #707070", borderRadius: ".5em",
                                    outline: "none",
                                    background: "inherit",
                                    marginTop: "1em",
                                    width: "100%"}}>
                                    Envoyer
                                </AButton>
                            </div>
                        </AForm>
                    </ABlock>
                </div>
            </ABlock>
        </div>
    )
    
}

export default LoginPage;