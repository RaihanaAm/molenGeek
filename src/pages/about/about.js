import "./_about.scss";
import "./_about_responsive.scss";
import { Card } from "./component.js"

import card1 from "../../assets/images/card1.png"
import card2 from "../../assets/images/card2.jpg"
import card3 from "../../assets/images/card3.jpg"

export const About = () => {
    return (
        <>
            <div className="About">
                <h1><span>MOLENGEEK</span>, C’EST QUOI?</h1>
                <p>MolenGeek est situé au cœur de Molenbeek à Bruxelles. Notre mission est de rendre le secteur des technologies accessible à toute personne désirant surfer sur la vague du digital, peu importe les origines ou le niveau de formation.</p>
                <p>Nous sommes composés de trois piliers principaux : un espace de coworking ; des programmes de formation à long et court terme ; et des évènements dynamiques, tels que des Hackathons, des Geektalks, etc.</p>
            </div>
            <div className="Cards">
                <Card img={card1} title={"Coworking"} />
                <Card img={card2} title={"Formation"}/>
                <Card img={card3} title={"Evenement"}/>

            </div>
        </>
    )
}