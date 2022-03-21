import React from "react";

function MentionLegalPage(){

    let textMentionLegal = "La société ActuGaming est une société par actions simplifiée au capital de 169 998 € immatriculée au RCS de Paris sous le n. 493 861 363 et dont le siège social est situé au 10 quai de la Charente 75019 Paris, France (N° TVA intracommunautaire : FR 87 493 861 363). ActuGaming est représentée par M. Alexandre CARON, son Président.\n" +
        "\n" +
        "ActuGaming est un établissement privé d’enseignement à distance et nous fournissons nos services d'actualité.\n" +
        "\n" +
        "Le Directeur de la Publication de la plateforme et le Directeur de l'Établissement Privé à Distance est Mme. Maeva.\n" +
        "\n" +
        "Le site est hébergé par Amazon Web Services Limited Liability Company (LLC) dont l’adresse est la suivante : Amazon Web Services, Inc. 410 Terry Ave North Seattle , WA 98109-5210 , US\n" +
        "\n" +
        "Nous contacter\n" +
        "\n" +
        "Par téléphone : +33 1 80 88 80 30\n" +
        "Par email : hello@ActuGaming.com\n" +
        "Par courrier : ActuGaming, 3 chemin du ravin, Grand Gouffre de la principauté de Shéogorath Oblivion\n" +
        "Vous bénéficiez d’un droit d’accès et de rectification aux informations qui vous concernent, que vous pouvez exercer par email à l’adresse data-protection@ActuGaming.com ou par courrier à l'adresse suivante : ActuGaming - Data Protection Officer 3 chemin du ravin, Grand Gouffre de la principauté de Shéogorath Oblivion. Vous pouvez également, pour des motifs légitimes, vous opposer au traitement des données vous concernant.\n" +
        "\n" +
        "Pour plus d’informations sur tous vos droits vous pouvez vous référer à notre Politique de Protection des Données Personnelles. "

    return(
        <div className="row g-0 justify-content-center align-items-center" >
            <div className="col-5">
                <div className="row">
                    <h1>Mention legal</h1>
                </div>
                <div className="row" style={{marginTop: "1em"}}>
                    <p style={{whiteSpace: "pre-line", verticalAlign: "bottom"}}>
                        {textMentionLegal}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MentionLegalPage;