import "../../CssFile/Home-css/MainHome.css"
import Btn from '../Help/Btn'
import Back from "../Help/Back"
import List from "./List"
import Loading from '../Help/Loading'
import Quick from '../Help/Quick'

import { useEffect, useState } from "react";
import axios from "axios";

export default function mainHome() {
    const [profiles, setProfiles] = useState([]);
    const [msg, setMsg] = useState({ msg: "", loading: "" });
    useEffect(() => {
        const fetchProfiles = async () => {
            setMsg((pre) => ({ ...pre, loading: "Fetching . . ." }));
            try {
                const res = await axios.get(
                    `${import.meta.env.VITE_BACKEND}/profiles`
                );
                setMsg((pre) => ({ ...pre, loading: "" }));
                setProfiles(res.data);
            } catch (err) {
                setMsg((pre) => ({ ...pre, loading: "", msg: "Failed to load profiles" }));
                console.error(err);
            }
        };

        fetchProfiles();
    }, []);

    return (
        <div className="mainhome isFlex">
            <Quick msg={msg.msg} setMsg={setMsg} />
            <Loading msg={msg.loading} />
            <Back />
            <img src="/Img/b3.jpg" alt="backpic" className="iiback" />
            <div className="prt1 isFlex">
                <div className="ttldiv isFlex">
                    <p className="tit">Lovers' Eternal Glowv</p>
                    <p className="sub"> Whisper Love to Your Soulmate's Heart 💕 </p>
                    <i className="iee">From stolen glances to soulmate embraces, your hand in mine turns every moment into forever. </i>
                    <div className="btndiv">
                        <Btn msg="Create for Your Partner 🦋" typ={2} fn={() => { window.location.href = "/register" }} />

                    </div>
                </div>
                <div className="viddiv">
                    <video
                        className="vid"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        src="https://res.cloudinary.com/denrzaquu/video/upload/v1770152052/5873974-uhd_4096_2160_30fps_reywcz.mp4"
                    />

                </div>
            </div>
            <div className="prt2 isFlex">
                <List msg={msg} setMsg={setMsg} setProfiles={setProfiles} profiles={profiles} />
            </div>

        </div>
    )
}