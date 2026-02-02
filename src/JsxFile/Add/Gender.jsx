import "../../CssFile/Add-css/Gender.css";
import Boy from "./boy";
import { useRef } from "react";

export default function Gender({ setData }) {
    const middle = useRef(null);

    function setGender(g) {


        setTimeout(() => {
            middle.current.style.transform = "rotateY(90deg)";

            setTimeout(() => {
                middle.current.style.transform = "rotateY(0deg)";
                setData((prev) => ({ ...prev, page: 2, gender: g, }));
            }, 1500);

        }, 10);
    }

    return (
        <div ref={middle} className="middle">
            <div className="inAdd isFlex">
                <p className="msg">
                    What's your <span>identity</span>
                </p>

                <p className="sort">
                    Just a small step that helps us add more love and meaning to your special Valentine page 🌸
                </p>

                <Boy typ={1} fn={() => setGender("m")} />
                <Boy typ={2} fn={() => setGender("f")} />
            </div>
        </div>
    );
}