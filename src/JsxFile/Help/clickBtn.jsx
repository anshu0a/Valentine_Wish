import { useState, useRef, useEffect } from "react";
import "../../CssFile/Help-css/clickBtn.css";
import { rejectTexts } from "./badMsg";

export default function MovingBtn({endIt}) {
    const [text, setText] = useState(0);
    const btnRef = useRef(null);
    const lockRef = useRef(false);

    const [pos, setPos] = useState(null);
    const [visible, setVisible] = useState(true);
    const [btnSize, setBtnSize] = useState({ w: 0, h: 0 });

    const PADDING = 12;

    const updateSize = () => {
        if (btnRef.current) {
            setBtnSize({
                w: btnRef.current.offsetWidth,
                h: btnRef.current.offsetHeight
            });
        }
    };

    useEffect(() => {
        updateSize();
    }, [text]);

    const moveBtn = () => {
        if (lockRef.current) return;
        lockRef.current = true;

        if (text < rejectTexts.length - 2) {
            setText(t => t + 1);
        } else {
            lockRef.current = false;
            setPos(null);
            endIt(false);
            return;
        }

        setVisible(false);

        setTimeout(() => {
            updateSize();

            const maxX = Math.max(
                0,
                window.innerWidth - btnSize.w - PADDING
            );
            const maxY = Math.max(
                0,
                window.innerHeight - btnSize.h - PADDING
            );

            const left = Math.random() * maxX + PADDING;
            const top = Math.random() * maxY + PADDING;

            setPos({
                left: `${left}px`,
                top: `${top}px`
            });

            setVisible(true);

            setTimeout(() => {
                lockRef.current = false;
            }, 300);
        }, 200);
    };

    return (
        <div
            ref={btnRef}
            className="clkbtnto isFlow btn-no"
            onClick={moveBtn}
            onMouseEnter={moveBtn}
            style={{
                position: pos ? "fixed" : "static",
                top: pos?.top,
                left: pos?.left,
                opacity: visible ? 1 : 0
            }}
        >
            {rejectTexts[text]}
        </div>
    );
}
