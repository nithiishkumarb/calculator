import "./Calcbutton.css"
function Calcbutton(props){
    return(
        <div>
            <button className={props.className} onClick={()=>props.onClick(props.value)}>{props.value}</button>
        </div>
    )
}
export default Calcbutton; 