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
        <div className="row g-0 justify-content-center align-items-center mb-3" style={{marginTop: "5em"}} >
                <div className={"w-30 d-flex justify-content-center form-inscription"}>
                    <AForm title="Connexion">
                        <AInput label="Adresse mail" type="mail"/>
                        <AInput label="Mot de passe" type="password"/>
                        <div className={"justify-content-center mb-3"}>
                            <AButton classNames={"btn-sign-in"} styles={{border: "1px solid #707070", borderRadius: ".5em",
                                outline: "none",
                                background: "#884A65}",
                                marginTop: "11em",
                                width: "100%"}}>
                                Envoyer
                            </AButton>
                        </div>
                    </AForm>
                </div>
                <div className={"w-30 d-flex justify-content-center form-inscription"} >
                    <AForm title="Inscription">
                        <AInput label="Nom Prénom" type="text"/>
                        <AInput label="Adresse mail" type="mail"/>
                        <AInput label="Mot de passe" type="password"/>
                        <AInput label="Confirmation mot de passe" type="password"/>
                        <div className={"d-flex  justify-content-center mb-3"}>
                            <AButton classNames={"btn-sign-in"} styles={{border: "1px solid #707070", borderRadius: ".5em",
                                outline: "none",
                                background: "#884A65",
                                marginTop: "1em",
                                width: "100%"}}>
                                Envoyer
                            </AButton>
                        </div>
                    </AForm>
                </div>
        </div>
    )
    
}

export default LoginPage;