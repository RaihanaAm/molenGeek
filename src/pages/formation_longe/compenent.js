import "./_long_responsive.scss"
import "./_loung.scss"
export const Format = (props) => {
    return (
        <div className="Format">
            <div style={{borderColor: props.style}} className="SingleFormat">
                <div className="number">
                    <h1>{props.number}</h1>
                </div>
                <div className="Contenu">
                    <div>
                        <h1>{props.title}</h1>
                        <h6>{props.para}</h6>
                        <div className="descrip">
                            <p>{props.descrip}</p>
                        </div>
                    </div>
                    <button style={{backgroundColor: props.style}}>{props.btn}</button>

                </div>
            </div>

        </div>
    )
}