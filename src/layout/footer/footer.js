import "./_footer.scss";
import "./_footer_responsive.scss"
import { AiOutlineTwitter } from "react-icons/ai";
import {BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import logo from "../../assets/images/logo.png";


export const Footer=()=>{
    return(
        <div className="Footer">
            <div className="SocielMedia">
                <p><BsFacebook/> &nbsp;Facebook</p>
                <p><AiOutlineTwitter/>&nbsp;Twitter</p>
                <p><BsInstagram/>&nbsp;Instagram</p>
                <p><BsLinkedin/>&nbsp;Linkedin</p>
            </div>
            <hr></hr>
            <div className="logo">
                <img src={logo}></img>
            </div>
            <p className="desc">MolenGeek est une organisation à but non lucratif.</p>
            <p className="copyWrite">Copyright © 2022. Coworking Co.</p>


        </div>
    )
}