import "../../CssFile/Help-css/NotFound.css"
import Btn from '../Help/Btn.jsx'

export default function NotFound(){
return (
    <div className="notFound  isFlex">
      <div className="found isFlex">
        <p className="oops">Ooops!</p>
        <p className="msg">This Page Took a Wrong Turn 🚧</p>
        <p className="normal">The link you entered doesn’t exist.</p>
        <div className="btn">
            <Btn msg="Design Your Valentine 💘" fn={()=>window.location.href = "/register"} typ={1} />
        </div>
      </div>
      <img className="imrobo" src="/Svg/robo.svg" />
    </div>
)
}