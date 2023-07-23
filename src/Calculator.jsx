import {useState} from "react"
import Calcbutton from "./Calcbutton";
import "./Calculator.css"
function Calculator(){
    const[calc,setcalc]=useState({
        current:"0",
        total:"0",
        isInitial: true,
        preOp:""
    });
    let handlenumber=(value)=>{
        let newvalue=value;
        if(!calc.isInitial){
            newvalue=calc.current + value;
        }
        setcalc({current:newvalue,total:calc.total,isInitial:false,preOp:calc.preOp});
    }
    let handleopertor=(value)=>{
        const total=docalculation();
        setcalc({current:total.toString(),total:total.toString(),isInitial:true,preOp:value})
    }
    let docalculation=()=>{
        let total=parseInt(calc.total);
        switch(calc.preOp){
            case "+":
                total+=parseInt(calc.current);
                break;
            case "-":
                total-=parseInt(calc.current);
                break;
            case "*":
                total*=parseInt(calc.current);
                break;
            case "/":
                total/=parseInt(calc.current);
                break;
            default:
                total=parseInt(calc.current);
        }
        return total;
    }
    let handleclear=()=>{
        setcalc({
        current:"0",
        total:"0",
        isInitial: true,
        preOp:""
        })
    }
    return(
        <div className="calculator">
            <div className="display">{calc.current}</div>
            <Calcbutton value="7" onClick={handlenumber}/>
            <Calcbutton value="8" onClick={handlenumber}/>
            <Calcbutton value="9" onClick={handlenumber}/>
            <Calcbutton className="operator" onClick={handleopertor} value="\"/>

            <Calcbutton value="6" onClick={handlenumber}/>
            <Calcbutton value="5" onClick={handlenumber}/>
            <Calcbutton value="4" onClick={handlenumber}/>
            <Calcbutton className="operator" onClick={handleopertor} value="*"/> 

            <Calcbutton value="3" onClick={handlenumber}/>
            <Calcbutton value="2" onClick={handlenumber}/>
            <Calcbutton value="1" onClick={handlenumber}/>
            <Calcbutton className="operator" onClick={handleopertor} value="-"/>

            <Calcbutton value="C" onClick={handleclear}/>
            <Calcbutton value="0" onClick={handlenumber}/>
            <Calcbutton value="=" onClick={handleopertor}/>
            <Calcbutton className="operator" onClick={handleopertor} value="+"/>
        </div>
    )
}
export default Calculator;