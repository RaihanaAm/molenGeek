import "./_formation.scss"
import "./_responsive.scss"
import court from "../../assets/images/court.jpg";
import loung from "../../assets/images/loung.jpg";

import { Decouvre } from "./compenent.js"
import { BiTimeFive } from "react-icons/bi";
import { FaHourglassStart } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";


export const Formation = () => {
    return (
        <div className="Formation">
            <h1 className="FormationTitle">Se former dès maintenant</h1>
            <div className="decouvre">
                    <Decouvre className="first" style="#e63d1c" icon={<BiTimeFive />} title={"FORMATION COURTES"} para={`… pour ajouter des compétences rapidement à mon C.V`} img={court} arrow={<BsArrowRight />} arrow1={"Photoshop CC (débutant)"} arrow2={"Premiere Pro (débutant)"} arrow3={"WordPress (débutant)"} arrow4={"Réseaux Sociaux (débutant)"} button={"Je découvre toutes les formations courtes"} />
                    <Decouvre className="first" style="#2071b7"   icon={<FaHourglassStart />} title={"FORMATION LONGUES"} para={"… pour me former entièrement à un nouveau métier"} img={loung} arrow={<BsArrowRight />} arrow1={"Web Developer"} arrow2={"Marketing Digital"} arrow3={"Aws re/Start"} arrow4={"Web Master"} button={"Je découvre toutes les formations longue"} />
            </div>
        </div>
    )

}