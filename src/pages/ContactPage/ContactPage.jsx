import React from "react";
import ABlock from "../../components/Atomic/ABlock";
import AForm from "../../components/Atomic/AForm";
import AInput from "../../components/Atomic/AInput";
import AButton from "../../components/Atomic/AButton";
import ABarreVertical from "../../components/Atomic/ABarreVertical";
import ALink from "../../components/Atomic/ALink";
import carteLoc from '../../image/carte.png'

function ContactPage() {

    return(
        <div className="row g-0 justify-content-center align-items-center" style={{marginTop: "5em"}}>
                <div className={"w-30 d-flex justify-content-center form-inscription"} >
                        <AForm title="Nous contacter">
                            <AInput label="Nom prénom" type="text"/>
                            <AInput label="Adresse mail" type="mail"/>
                            <AInput label="Object" type="textarea"/>
                            <div className="d-flex flex-column">
                                <label className="col-form-label mt-4 text-start">Votre message</label>
                                <textarea className="form-control" ></textarea>
                            </div>
                            <div className={"justify-content-center mb-3"}>
                                <AButton classNames={"btn-sign-in"} styles={{border: "1px solid #707070", borderRadius: ".5em",
                                outline: "none",
                                background: "inherit",
                                marginTop: "1em",
                                width: "100%"}}>
                                Envoyer
                                </AButton>
                            </div>
                        </AForm>
                    </div>
                     <div style={{height: "40.5rem"}} className={"w-30 d-flex flex-column justify-content-start form-inscription"} >
                        <h2 className="mb-2 align-self-center" style={{color:"#884A65"}}>Nous Trouver</h2>
                        <img src={carteLoc} style={{maxWidth: "100%",
                            height: 'auto'}}/>
                        <a className="m-2 align-self-center" href="https://goo.gl/maps/i9vSAsCq1ywSsdcC9">Ouvrir Carte</a>
                        <div style={{border: "none"}}>
                            3 chemin du ravin,<br/>
                            Grand Gouffre de la principauté de Shéogorath<br/>
                            Oblivion
                        </div>
                    </div>


        </div>
    )
}

export default ContactPage;