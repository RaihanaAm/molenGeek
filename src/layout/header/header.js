import logo from "../../assets/images/logo.png";
import fr from "../../assets/images/logo Fr.png";
import "./header.scss";
import "./responsive.scss";

export const Navbar = () => {
    return (
        <div className="navbar row p-0 m-0" >
            <div className="DivLogo col-lg-2 ">
                <img className="img" src={logo} alt="h"></img>
            </div>
            <div className="Divlist col-lg-8">
                <ul className="list">
                    <li className="li"> <a href="#" >FORMATIONS </a></li>
                    <li> <a href="#" >COWORKING</a></li>
                    <li> <a href="#" >AGENDA</a></li>
                    <li> <a href="#" >A PROPOS</a></li>
                    <li> <a href="#" >PRESSE</a></li>
                    <li> <a href="#" >MOLENGEEK.PRO</a></li>
                    <li> <a href="#" >JOBS</a></li>
                    <li><img src={fr}></img> <a href="#" >FRANCAIS</a> </li>

                </ul>
            </div>
            <div className="DivContacte col-lg-2 ">
                <h3>CONTACTER-NOUS</h3>
            </div>





        </div>

    )
}