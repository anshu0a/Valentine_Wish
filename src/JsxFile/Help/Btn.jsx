/* eslint-disable react-hooks/rules-of-hooks */
import "../../CssFile/Help-css/flexbtn.css"
import { useState } from "react"

export default function btn({fn,msg, typ}){
const [clr] = useState(
    typ === 1 ? "#6d0033": 
    typ == 2 ? "#ff84ad":
    typ == 3 ? "#ff5400":
    typ == 4 ? "#5e4000":
    typ == 5 ? "#ff007f":
    typ == 6 ? "#ff3c78":
    "#30343f");
    return (
        <div
        style={{backgroundColor:clr , boxShadow:"0px 0px 10px  "+clr}}
         className="flexbtn" 
         onClick={fn}>
            {msg}
        </div>
    )
}