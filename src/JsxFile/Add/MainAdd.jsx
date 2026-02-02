import "../../CssFile/Add-css/MainAdd.css"

import { useState } from "react"
import Gender from './Gender'
export default function mainAdd() {
   const [data,setData] = useState({page:1, gender:"m"})
    return (
        <div className="mainAdd .asImg isFlex">
          {
            data.page == 1?
             <Gender setData={setData}  />
             :
             <></>
          }
        </div>
    )
}