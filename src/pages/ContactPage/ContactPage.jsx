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
        <div className="row g-0 justify-content-center align-items-center"
             style={{marginTop: "5em"}} >
            <ABlock styles={{border: "none", width: "50%" }} >
                <ABlock styles={{border: "1px solid black",
                    display: "flex", justifyContent: "space-evenly"
                }} >
                    <ABlock styles={{border : "none", display: "flex",
                        flexDirection: "column", alignItems: "center"}}>
                        <AForm title="Connexion">
                            <AInput label="Mom Prénom" type="text"/>
                            <AInput label="Adresse mail" type="text"/>
                            <AInput label="Message" type="textarea"/>
                            <div className="d-flex flex-column">
                                <label className="col-form-label mt-4 text-start">Message</label>
                                <textarea className="form-control" ></textarea>
                            </div>
                            <AButton styles={{border: "1px solid #707070", borderRadius: ".5em",
                                outline: "none",
                                background: "inherit",
                                marginTop: "1em"}}>
                                Envoyer
                            </AButton>
                        </AForm>
                    </ABlock>
                    <ABarreVertical styles={{height: "29rem"}}/>
                    <ABlock styles={{border : "none",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "30%"}}>
                        <h2>Nous Trouvez</h2>
                        <img src={carteLoc} style={{maxWidth: "100%",
                            height: 'auto'}}/>
                        <a href="https://goo.gl/maps/i9vSAsCq1ywSsdcC9">Ouvrir Carte</a>
                        <ABlock styles={{border: "none"}}>
                            3 chemin du ravin,
                            Grand Gouffre de la principauté de Shéogorath
                            Oblivion
                        </ABlock>

                    </ABlock>
                </ABlock>
            </ABlock>
        </div>
    )
}

export default ContactPage;