import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

import '../../CssFile/view-css/MainView.css'
import Loading from '../Help/Loading'
import Quick from '../Help/Quick'
import valentineAsks from "../Help/question"
import ClickBtn from '../Help/clickBtn'
import getQuote from '../Help/quote'
import Btn from '../Help/Btn'
import { accept, reject } from "../Help/Accept_Reject";

const acceptTexts = [
    "Accept ❤️",
    "Truly? You chose me? 😍",
    "Forever yours, I promise 💞"
];
const flow = ['L', 'O', 'V', 'E', "❤️", "💞", "💌", "🌸"]

export default function view() {
    const { id } = useParams();
    const [pro, setProfile] = useState({});
    const song = useRef([new Audio("https://res.cloudinary.com/denrzaquu/video/upload/v1770444689/m2_sq7pct.mp3"),
    new Audio("https://res.cloudinary.com/denrzaquu/video/upload/v1770444689/m1_kck2ok.mp3")])
    const [msg, setMsg] = useState({
        msg: "", loading: "",
        disyes: false, disno: false,
        cnt: 0,
        ques: valentineAsks(), quote: getQuote(),
        sts: "", typ: "", open: false
    });

    useEffect(() => {
        const pees = document.querySelectorAll('.pee');

        pees.forEach((pee) => {
            // Random horizontal zigzag offsets
            pee.style.setProperty('--x1', `${Math.random() * 40 - 20}px`); // -20 to 20
            pee.style.setProperty('--x2', `${Math.random() * 40 - 20}px`);
            pee.style.setProperty('--x3', `${Math.random() * 40 - 20}px`);
            pee.style.setProperty('--x4', `${Math.random() * 40 - 20}px`);

            // Random duration 2.5s to 3.5s
            const duration = 2.5 + Math.random();
            pee.style.setProperty('--duration', `${duration}s`);

            // Random delay 0-0.5s
            setTimeout(() => {
                pee.classList.add('animate');
                setTimeout(() => pee.classList.remove('animate'), duration * 1000);
            }, Math.random() * 500);
        });

    }, [msg.sts]);


    useEffect(() => {
        async function getData() {
            setMsg((pre) => ({ ...pre, loading: "Loading . . ." }))
            await axios.get(`${import.meta.env.VITE_BACKEND}/profile/${id}`)
                .then(res => {
                    setMsg((pre) => ({ ...pre, msg: "", loading: "" }))
                    setProfile(res.data);
                })
                .catch(err => {
                    setMsg((pre) => ({ ...pre, msg: err.message || "Profile not found", loading: "" }))
                    console.error(err);
                });
        }
        getData();
        const arr = JSON.parse(localStorage.getItem("ViewLink")) || [];
        const arr1 = JSON.parse(localStorage.getItem("MyLink")) || [];
        if (!arr.includes(id) && !arr1.includes(id)) {
            arr.push(id);
            localStorage.setItem("ViewLink", JSON.stringify(arr));
        }

    }, [id]);

    function endIt(is) {
        if (is) {
            setMsg((pre) => ({ ...pre, disno: true, sts: accept(), typ: 'happy', open: true }));
            acceptreq();
        } else {
            setMsg((pre) => ({ ...pre, disyes: true, sts: reject(), typ: 'sad', open: true }));
        }
    }


    const btn_yes = () => {
        song.current[1].pause();
        song.current[0].pause();
        song.current[0].play()
        if (msg.cnt < acceptTexts.length - 2) {
            setMsg((pre) => ({ ...pre, cnt: pre.cnt + 1 }))
        } else {
            endIt(true);
            return;
        }
    };

    async function acceptreq() {
        try {

            await axios.post(`${import.meta.env.VITE_BACKEND}/accept`, { profileId: id });

        } catch (err) {
            setMsg((pre) => ({ ...pre, msg: err.message || "Profile not found", loading: "" }))
            console.error("Error sending accept data:", err.message);
        }
    }

    return (
        <>
            <Quick msg={msg.msg} setMsg={setMsg} />
            <Loading msg={msg.loading} />
            <img className='dv' src="/Img/b4.jpg" ></img>
            {Array.from({ length: 50 }).map((_, i) => (
                <p key={i} className="pee"
                    style={{
                        top: `${Math.random() * 80}vh`,
                        left: `${Math.random() * 80}vw`
                    }}>  {flow[Math.floor(Math.random() * flow.length)]}   </p>))
            }
            {
                msg.open &&
                <div className="lastmsg isFlex">
                    <div className="inbox isFlex">
                        {
                            msg.typ == "sad" ?
                                <iframe className="hh" src="https://lottie.host/embed/b3f1c57f-cdf6-4d5d-81d2-65aa099c1156/3LFiKEuIeb.lottie"></iframe>
                                :
                                <iframe className="hh" src="https://lottie.host/embed/b97c300a-17b0-45e5-ad59-8d2d94d327a7/llVGY6TpYR.lottie"></iframe>
                        }
                        <p>{msg.sts}</p>
                    </div>
                    <div className="isFlex btndivu">
                        <Btn fn={() => { setMsg((pre) => ({ ...pre, open: false })); song.current[1].pause(); song.current[0].pause(); }} typ={2} msg="Close 🥀" />
                        <Btn fn={() => { window.location.href = "/"; song.current[1].pause(); song.current[0].pause(); }} typ={6} msg="Home 🌸" />
                    </div>
                </div>
            }

            <div className="mainview isFlex">
                <div className="boxpic isFlex">
                    <img src={pro.herpicdata ? pro.herpicdata : pro.herimg} className="picis"></img>
                    <div className="pdiv">
                        <p className="mainp">Hey, <span>{pro.hernick ? pro.hernick : pro.hername}</span></p>
                        <p className="biop">{pro.herbio}</p>
                        <p className="qp">{msg.ques} </p>
                    </div>
                </div>

                <div className="btndivv isFlex">
                    {!msg.disyes && <div onClick={btn_yes} className="clkbtnto isFlow btn-yes">{acceptTexts[msg.cnt]}</div>}
                    {!msg.disno && <ClickBtn song={song} endIt={endIt} />}

                </div>
                <i className="quotevis isFlow">{msg.quote[0]} <span>{"~ " + msg.quote[1]}</span></i>
                <div className="gohome isFlex">
                    <div onClick={() => window.location.reload()} className="home? isFlex">
                        <svg viewBox="-4 -3.5 30 30" >
                            <path d="M20,7.67839023 C20.3191373,7.67839023 20.6033578,7.8277818 20.7864517,8.06040161 L20.7868129,8.0569409 C21.552384,9.17836413 22,10.5338305 22,11.9937699 C22,15.7761413 18.9955544,18.857279 15.2414096,18.9840181 L15.0007869,18.9880738 L9.405,18.9874442 L10.7086806,20.2904605 L10.7863869,20.3776202 C11.0972124,20.7698625 11.0713103,21.3413068 10.7086806,21.7036822 C10.3481966,22.0639133 9.78096555,22.0916234 9.38867434,21.7868124 L9.29446701,21.7036822 L6.28926319,18.7005862 L6.21155682,18.6134265 C5.92663349,18.2538711 5.92465485,17.7437362 6.20562092,17.3820893 L6.28926319,17.2873645 L9.29446701,14.2842685 L9.38168782,14.2066167 C9.74149567,13.9218932 10.2519886,13.9199159 10.6138893,14.2006849 L10.7086806,14.2842685 L10.7863869,14.3714282 C11.0713103,14.7309837 11.0732889,15.2411186 10.7923228,15.6027654 L10.7086806,15.6974902 L9.415,16.988847 L15.0007869,16.9894766 C17.7617761,16.9894766 20,14.7528225 20,11.9937699 C20,10.9755377 19.6951563,10.0284557 19.1716955,9.23868979 C19.0637032,9.07917977 19,8.88586843 19,8.67768884 C19,8.12579146 19.4477153,7.67839023 20,7.67839023 Z M14.6250898,2.21140589 L14.7123106,2.28905775 L17.7175144,5.29215375 C18.0801441,5.6545291 18.1060462,6.22597341 17.7952208,6.61821576 L17.7175144,6.70537539 L14.7123106,9.70847139 C14.3217863,10.0987218 13.6886213,10.0987218 13.298097,9.70847139 C12.9354673,9.34609604 12.9095652,8.77465173 13.2203907,8.38240938 L13.298097,8.29524975 L14.595,6.9978595 L8.99921311,6.99806318 C6.23822395,6.99806318 4,9.23471726 4,11.9937699 C4,12.9117144 4.24775158,13.771834 4.6800791,14.5109974 L4.81525146,14.7290546 C4.93132393,14.8915256 5,15.0916491 5,15.3078015 C5,15.8596989 4.55228475,16.3071002 4,16.3071002 C3.66599922,16.3071002 3.37024338,16.143469 3.18863074,15.8920517 C2.43832928,14.7808948 2,13.4384851 2,11.9937699 C2,8.21139848 5.0044456,5.13026076 8.75859041,5.00352168 L8.99921311,4.99946596 L14.597,4.99926229 L13.298097,3.7022794 C12.9354673,3.33990404 12.9095652,2.76845974 13.2203907,2.37621739 L13.298097,2.28905775 C13.6607267,1.9266824 14.2325721,1.90079845 14.6250898,2.21140589 Z" > </path>
                        </svg>
                    </div>
                    <div onClick={() => window.location.href = "/"} className="retry? isFlex">
                        <svg viewBox="0 0 24 24"  >
                            <path stroke="rgba(255, 0, 123, 0.672)" strokeWidth="0.5" d="M6.5 20V11H3L12 5L21 11H17.5V20H14.5V16.5C14.5 15.6716 13.8284 15 13 15H11C10.1716 15 9.5 15.6716 9.5 16.5V20H6.5Z"   ></path>
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}











