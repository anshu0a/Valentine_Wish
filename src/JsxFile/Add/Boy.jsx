import "../../CssFile/Add-css/Gender.css"
export default function boy({typ,fn}) {
    return (
         <div onClick={fn}
            className={typ == 1 ? "crd isFlex crd1" : typ==2 ? "crd isFlex crd2"  :""}>
            {typ == 1 ? "Male" : typ==2 ? "Female"   :"empty-msg"}
        </div>
    )
}