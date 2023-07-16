import "./_about.scss"
export const Card =(props)=>{
    return (
        <div className="Card">
            <img src={props.img}></img>
            <h2>{props.title}</h2>
            <button>En Savoir plus</button>
            
        </div>
    )
}