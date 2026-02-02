/* eslint-disable react-hooks/rules-of-hooks */
import "../../CssFile/Help-css/flexbtn.css"
import { useState } from "react"

export default function btn({fn,msg, typ}){
const [clr] = useState(typ === 1 ? "#6d0033":"black");
    return (
        <div
        style={{backgroundColor:clr , boxShadow:"0px 0px 10px 1px "+clr}}
         className="flexbtn" 
         onClick={fn}>
            {msg}
        </div>
    )
}