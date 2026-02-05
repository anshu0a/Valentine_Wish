import { useEffect, useRef, useState } from "react";
import "../../CssFile/Add-css/MyDtl.css";
import Btn from "../Help/Btn";
import InpDiv from './Name'
import Quick from "../Help/Quick";
import getprofile from '../Help/Image'

export default function MyDtl({ data, setData }) {
    const [msg,setMsg] = useState({msg:""})
    const mydt = useRef(null);

    function goback() {
        setTimeout(() => {
            if (mydt.current) {
                mydt.current.style.transform = "rotateY(-90deg)";
            }

            setTimeout(() => {
                if (mydt.current) {
                    mydt.current.style.transform = "rotateY(0deg)";
                }
                setData(prev => ({ ...prev, page: 1 }));
            }, 400);
        }, 10);
    }
    function goNext() {
        if(data.myname == "") return setMsg((pre)=>({...pre, msg:"Your name required."}))
        setTimeout(() => {
            if (mydt.current) {
                mydt.current.style.transform = "rotateY(90deg)";
            }

            setTimeout(() => {
                if (mydt.current) {
                    mydt.current.style.transform = "rotateY(0deg)";
                }
                setData(prev => ({ ...prev, page: 3 }));
            }, 400);
        }, 10);
    }


    function showImg(e) {
        const file = e.target.files[0];
        if (!file) return;

        const previewUrl = URL.createObjectURL(file);
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = () => {
            setData(prev => ({
                ...prev,
                myimg: null,
                mypicurl: previewUrl,
                mypicdata: reader.result
            }));
        };
    }
    function chgname(e) {
        const val = e.target.value.trim().slice(0, 20);
        setData(prev => ({
            ...prev,
            myname: val
        }));
    }
    return (
        <div ref={mydt} className="mydtl isFlex">
            <Quick msg={msg.msg} setMsg={setMsg} />
            <p className="msg">
                Pick the look that <i>matches</i> you ✨
            </p>

            <img
                className="prf"
                src={data.myimg ? data.myimg : data.mypicurl}
                alt="profile"
            />

            <div className="picbtn isFlex">
                <p
                    className="prt prt1"
                    onClick={() =>
                        setData(prev => ({
                            ...prev,
                            myimg: getprofile(),
                            mypicurl: null,
                        }))
                    }
                >
                    Change 💝
                </p>

                <input
                    id="imginp"
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={showImg}
                />

                <label htmlFor="imginp" className="prt prt2">
                    Upload New ✨
                </label>
            </div>
            <InpDiv msg="What's your name?" namex={data.myname} place="Eg. anshu" fn={chgname} />
            <div className="btn isFlex">
                <Btn msg="Back ❤️" typ={2} fn={goback} />
                <Btn msg="Next 💌" typ={3} fn={goNext} />
            </div>
        </div>
    );
}

