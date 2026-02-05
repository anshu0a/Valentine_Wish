import { useState } from 'react';
import axios from 'axios';
import '../../CssFile/Home-css/List.css'
import Share from './Share'

const valen = ["❤️", "💖", "💘", "💕", "💞", "💓", "💗", "💌", "💝", "🌸",];


export default function pannel({ setProfiles, one, my, msg, setMsg }) {

    const [no, setNo] = useState({ share: false, hide: one.hide, emoji: valen[Math.floor(Math.random() * valen.length)] })

    const hideProfile = async (e) => {
        e.stopPropagation();
        if (msg.loading != "") return
        setMsg((pre) => ({ ...pre, loading: "Status updating . . ." }));
        try {
            await axios.post(
                `${import.meta.env.VITE_BACKEND}/hideProfile`, { sts: !no.hide, id: one._id }
            );

            setMsg((pre) => ({ ...pre, loading: "", msg: no.hide ? "Valentine public" : "Valentine hidden" }));
            setNo((pre) => ({ ...pre, hide: !pre.hide }));

        } catch (err) {
            setMsg((pre) => ({ ...pre, msg: err.message || "Somthing went wrong", loading: "" }));
            console.error("Failed to hide profile", err);
        }
    };

    const deleteProfile = async (e) => {
        e.stopPropagation();
        if (msg.loading !== "") return;

        setMsg(pre => ({ ...pre, loading: "Valentine deleting . . ." }));

        try {
            await axios.get(`${import.meta.env.VITE_BACKEND}/delete`, { params: { id: one._id } });

            setProfiles(pre => pre.filter(ele => ele._id !== one._id));
            setMsg(pre => ({ ...pre, loading: "", msg: "Valentine deleted" }));
            setNo(pre => ({ ...pre, hide: !pre.hide }));

        } catch (err) {
            setMsg(pre => ({ ...pre, loading: "", msg: err.response?.data?.message || "Something went wrong" }));
            console.error("Failed to delete profile", err);
        }
    };


    const chg = (e) => {
        e.stopPropagation();
        setNo((pre) => ({ ...pre, emoji: valen[Math.floor(Math.random() * valen.length)] }))
    }
    const openShare = (e) => {
        e.stopPropagation();
        setNo((pre) => ({ ...pre, share: true }));
    };

    return (
        (!one.hide || my) &&
        <div onClick={() => window.open(`/view/${one._id}`, "_blank")} className="thisone isFlex">
            <div className={`${my ? "ext" : ""} outprof isFlex`}>
                <div className='prf '>
                    <img
                        src={one.myimg || one.mypicdata || `/Img/${one.gender}.png`}
                        alt="my" className="iing" />
                    <img
                        src={one.herimg || one.herpicdata || `/Img/${one.gender == "m" ? "f" : "m"}.png`}
                        alt="" className="iing" />
                </div>
                <p className='txtu isFlow'> {one.myname}
                    <span className='isFlex' onClick={chg}> {one.acept ? no.emoji : "-"} </span>
                    {one.hername}</p>

            </div>
            {my &&
                <>
                    <div onClick={openShare} className={` hidu h3 isFlex`}>
                        <Share share={no.share} setShare={setNo} id={one._id} />
                    </div>

                    <div onClick={hideProfile} className={`${no.hide && "hide "} hidu h2 rot isFlex`}>
                        <svg viewBox="0 0 24 24" >
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5229 22 22 17.5228 22 12C22 6.47715 17.5229 2 12 2C6.81465 2 2.5511 5.94668 2.04938 11H11.5858L8.2929 7.70711L9.70711 6.29289L14.7071 11.2929L15.4142 12L14.7071 12.7071L9.70711 17.7071L8.2929 16.2929L11.5858 13H2.04938C2.5511 18.0533 6.81465 22 12 22Z" ></path>
                        </svg>
                    </div>
                    <div onClick={deleteProfile} className={` hidu h1 isFlex`}>
                        <svg viewBox="0 0 24 24">
                            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
                        </svg>
                    </div>
                </>}
        </div>
    );
}
