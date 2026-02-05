import "../../CssFile/Add-css/MainAdd.css"
import { useState } from "react"

import Gender from './Gender'
import MyDtl from "./MyDtl"
import HerDtl from "./HerDtl"
import getprofile from '../Help/Image'
import getBio from '../Help/getBio'
import QrPage from './QrPage'
import Back from "../Help/Back"

export default function mainAdd() {
  const [data, setData] = useState({
    page: 1,
    gender: "m",

    myimg: getprofile(),
    mypicurl: null, mypicdata: null,
    myname: "",

    herimg: getprofile(),
    herpicurl: null, herpicdata: null,
    hername: "",
    hernick: "",
    herbio: getBio(),

    id:"error",
  })
  return (
    <div className="mainAdd .asImg isFlex">
      <Back />
      {
        data.page == 1 ?
          <Gender setData={setData} />
          :
          data.page == 2 ?
            <MyDtl data={data} setData={setData} />
            :
            data.page == 3 ?
              <HerDtl data={data} setData={setData} />
              :
              data.page == 4 ?
              <QrPage id={data.id}  />
              :
              <></>
      }
    </div>
  )
}


