export default function  Dice(props){

    const style={
        backgroundColor:props.isHeld ? "#59E391" : "white"
    }
    return(
      <div  style={style} className="dice-wrap" onClick={props.onHeld}>
           <h2>{props.value}</h2>
      </div>
    )
}