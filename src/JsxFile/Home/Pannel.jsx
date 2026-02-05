import '../../CssFile/Home-css/List.css'
import One from './one'
export default function pannel({ setProfiles, alldata, my , msg, setMsg }) {

    return (
        <div className='pannel isFlex'>
            {
                alldata.length != 0 ?
                alldata.slice(0,20).map((each) => (<One setProfiles={setProfiles} my={my} msg={msg} setMsg={setMsg} key={each._id} one={each} />))
                :
                <>
                <img className='emptyList' src="/Svg/empty.svg" ></img>
                <p className='emptyTx'>Empty</p>
                </>
            }
        </div>

    );
}









