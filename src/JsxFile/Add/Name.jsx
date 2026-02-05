import "../../CssFile/Add-css/MyDtl.css";

export default function name({msg , namex , name, place, fn}) {
    return (
        <div className="inpdiv">
            <p className="lbl">{msg}</p>
            <input 
            name={name}
            value={namex}
            onChange={fn}
            placeholder={place}
             className="inpp" 
             type="text"></input>
        </div>
    )
}