import "./_formation.scss"
import "./_responsive.scss"
export const Decouvre = (props) => {
    return (
        <div className="Decouvre">
                <h1 style={{color: props.style}}>{props.icon} &nbsp;{props.title}</h1>
            <h4>{props.para}</h4>
            <img src={props.img}></img>
            <div>
                <p>{props.arrow}&nbsp;{props.arrow1}</p>
                <p>{props.arrow}&nbsp;{props.arrow2}</p>
                <p>{props.arrow}&nbsp;{props.arrow3}</p>
                <p>{props.arrow}&nbsp;{props.arrow4}</p>
            </div>
            <button style={{backgroundColor: props.style}} >{props.button}</button>
        </div>
    )

}