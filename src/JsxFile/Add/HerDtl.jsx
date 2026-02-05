import { useRef, useState } from "react";
import "../../CssFile/Add-css/MyDtl.css";
import Btn from "../Help/Btn";
import InpDiv from './Name';
import Quick from "../Help/Quick";
import Loading from '../Help/Loading'
import getprofile from '../Help/Image';
import getBio from '../Help/getBio';
import axios from 'axios';

export default function HerDtl({ data, setData }) {
    const [msg, setMsg] = useState({ msg: "", loading: "" });
    const mydt = useRef(null);


    function goback() {
        setTimeout(() => {
            if (mydt.current) mydt.current.style.transform = "rotateY(-90deg)";
            setTimeout(() => {
                if (mydt.current) mydt.current.style.transform = "rotateY(0deg)";
                setData(prev => ({ ...prev, page: 2 }));
            }, 400);
        }, 10);
    }


    async function goNext() {

        try {
            if (data.hername == "") return setMsg((pre) => ({ ...pre, msg: "Her name is required." }));
            setMsg((pre) => ({ ...pre, loading: "Creating your valentive . . ." }))
            const mydata = {
                gender: data.gender,
                myname: data.myname,
                hername: data.hername,
                hernick: data.hernick,
                herbio: data.herbio,
                herimg: data.herimg,
                myimg: data.myimg,
                mypicdata: data.mypicdata,
                herpicdata: data.herpicdata
            };

            const res = await axios.post(`${import.meta.env.VITE_BACKEND}/addOne`,
                mydata, { headers: { "Content-Type": "application/json" } }
            );
            setMsg((pre) => ({ ...pre, loading: "" }))

            setTimeout(() => {
                if (mydt.current) mydt.current.style.transform = "rotateY(90deg)";
                setTimeout(() => {
                    if (mydt.current) mydt.current.style.transform = "rotateY(0deg)";
                    setData({ page: 4, gender: "m", myimg: getprofile(), mypicurl: null, mypicdata: null, myname: "", herimg: getprofile(), herpicurl: null, herpicdata: null, hername: "", hernick: "", herbio: getBio(), id: res.data.id, });
                }, 400);
            }, 10);


        } catch (err) {
            console.error("Error sending data:", err);
            setMsg((pre) => ({ ...pre, loading: "", msg: "Somthing went wrong, Try Again!" }))
        }
    };




    function showImg(e) {
        const file = e.target.files[0];
        if (!file) return;

        const previewUrl = URL.createObjectURL(file);
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => {
            setData(prev => ({
                ...prev,
                herimg: null,
                herpicurl: previewUrl,
                herpicdata: reader.result
            }));
        };
    }


    function chgname(e) {
        const val = e.target.value.trim().slice(0, 20);
        setData(prev => ({
            ...prev,
            [e.target.name]: val
        }));
    }

    return (
        <>
            <Quick msg={msg.msg} setMsg={setMsg} />
            <Loading msg={msg.loading} />
            <div ref={mydt} className="mydtl isFlex">

                <p className="msg">
                    Pick the look that <i>matches</i> your partner ✨
                </p>

                <img
                    className="prf"
                    src={data.herimg ? data.herimg : data.herpicurl}
                    alt="profile"
                />

                <div className="picbtn isFlex">
                    <p
                        className="prt prt1"
                        onClick={() => setData(prev => ({
                            ...prev,
                            herimg: getprofile(),
                            herpicurl: null
                        }))}
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

                <div className="boxof isFlex">
                    <InpDiv
                        name="hername"
                        msg={data.gender == "m" ? "Her name?" : "His name?"}
                        place="Eg. Nick"
                        namex={data.hername}
                        fn={chgname}
                    />
                    <InpDiv
                        name="hernick"
                        msg={data.gender == "m" ? "Her nickname?" : "His nickname?"}
                        place="Eg. Nikku (Optional)"
                        namex={data.hernick}
                        fn={chgname}
                    />
                </div>

                <div className="biobox isFlex">
                    {data.herbio}
                    <div className="generate">
                        <Btn
                            msg="Change ✨"
                            typ={4}
                            fn={() => setData(prev => ({ ...prev, herbio: getBio() }))}
                        />
                    </div>
                </div>

                <div className="btn isFlex">
                    <Btn msg="Back ❤️" typ={2} fn={goback} />
                    <Btn msg="Next 💌" typ={3} fn={goNext} />
                </div>
            </div>
        </>
    );
}