import "./_long_responsive.scss"
import "./_loung.scss"
import { Format } from "./compenent.js"

export const CourtFormation = () => {
    return (
        <div>
            <h1 className="courTitle">Nos formations longues</h1>
            <Format style="#944d9e" number={"1"} title={ "Coding School"} para={ "Apprends à coder un site internet de A à Z"} descrip={ "6 mois • maximum 29 ans • demandeur d’emploi • inscrit chez Actiris • temps plein 9h / 17h"} btn={"S'inscrire" } />
            <Format style="#e63d1c" number={"2"} title={"Marketing Digital" } para={ "Forme-toi au marketing digital"} descrip={ "6 mois • maximum 29 ans • demandeur d’emploi • inscrit chez Actiris • temps plein 9h / 17h"} btn={ "S'inscrire"} />
            <Format style="#47ab34" number={"3"} title={"Webmaster 360" } para={ "Crée des sites performants et attractifs avec WordPress"} descrip={"6 mois • demandeur d’emploi • inscrit chez Actiris" } btn={"Coming soon" } />
            <Format style="#f2d202" number={"4"} title={"AWS re/Start" } para={"Développe tes compétences en Cloud" } descrip={ "3 mois • maximum 29 ans • demandeur d’emploi • inscrit chez Actiris • temps plein 9h / 17h"} btn={ "Coming soon"} />
            <Format style="#2071b7" number={"5"} title={"Salesforce Administrateur"} para={"Optimise un bon service client grâce à Salesforce" } descrip={"3 mois • demandeur d’emploi • inscrit chez Actiris • temps plein 9h / 17h" } btn={"Coming soon" } />
        </div>


    )
}