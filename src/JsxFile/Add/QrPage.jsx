import '../../CssFile/Add-css/QrCode.css'
import { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";
import Btn from '../Help/Btn'
import Quick from '../Help/Quick'
import { clrs } from "../Help/clrs";

// helper to interpolate hex colors
function lerpColor(a, b, t) {
    const hex = (c) => parseInt(c, 16);
    const r = Math.round(hex(a.slice(1, 3)) * (1 - t) + hex(b.slice(1, 3)) * t);
    const g = Math.round(hex(a.slice(3, 5)) * (1 - t) + hex(b.slice(3, 5)) * t);
    const b_ = Math.round(hex(a.slice(5, 7)) * (1 - t) + hex(b.slice(5, 7)) * t);
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b_.toString(16).padStart(2, '0')}`;
}

export default function qucode({ id }) {
    const [msg, setMsg] = useState({ msg: "" })
    const canvasRef = useRef(null);
    const link = `${window.location.origin}/view/${id}`;
    const [range, setRange] = useState(0);
    const [progress, setProgress] = useState(0); // 0 → 1 for smooth transition

    // Animate progress
    useEffect(() => {
        const arr = JSON.parse(localStorage.getItem("MyLink")) || [];
        if(!arr.includes(id)){
            arr.push(id);
            localStorage.setItem("MyLink", JSON.stringify(arr));
        }
        const step = 0.02; // controls speed
        const anim = setInterval(() => {
            setProgress(prev => {
                if (prev >= 1) {
                    setRange(r => (r + 1) % clrs.length); // go to next gradient
                    return 0;
                }
                return prev + step;
            });
        }, 10); // ~60fps
        return () => clearInterval(anim);
    }, [id]);

    // Smoothly interpolate colors
    const [g1From, g2From] = clrs[range];
    const [g1To, g2To] = clrs[(range + 1) % clrs.length];
    const g1 = lerpColor(g1From, g1To, progress);
    const g2 = lerpColor(g2From, g2To, progress);

    // Re-draw QR whenever gradient changes
    useEffect(() => {
        generateQR();
    }, [g1, g2, id]);

    async function generateQR() {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const size = 220;
        canvas.width = size;
        canvas.height = size;

        const ctx = canvas.getContext("2d");

        // Gradient background
        const gradient = ctx.createLinearGradient(0, 0, size, size);
        gradient.addColorStop(0, g1);
        gradient.addColorStop(1, g2);
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, size, size);

        // Generate QR on temp canvas
        const qrCanvas = document.createElement("canvas");
        await QRCode.toCanvas(qrCanvas, link, {
            width: size,
            margin: 5,
            errorCorrectionLevel: "H",
            color: {
                dark: "#ffffff",
                light: "#ffffff00" // transparent
            }
        });

        ctx.drawImage(qrCanvas, 0, 0);

        // Draw heart
        drawHeart(ctx, size);
    }

    function drawHeart(ctx, size) {
        const x = size / 2;
        const y = size / 2;
        const heartSize = size * 0.14;

        ctx.font = `${heartSize}px serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("❤️", x, y);
    }

    function copyLink() {
        navigator.clipboard.writeText(link);
        setMsg((pre) => ({ ...pre, msg: "Copied" }));
    }

    function downloadQR() {
        const canvas = canvasRef.current;
        const a = document.createElement("a");
        a.download = "Valentine.png";
        a.href = canvas.toDataURL("image/png");
        a.click();
    }

    async function shareQR() {
        const canvas = canvasRef.current;
        const blob = await new Promise(res => canvas.toBlob(res));
        const file = new File([blob], "qr-code.png", { type: "image/png" });

        if (navigator.share && navigator.canShare({ files: [file] })) {
            navigator.share({ title: "QR Code", text: link, files: [file] });
        } else {
            setMsg((pre) => ({ ...pre, msg: "Share not supported" }));
        }
    }

    return (
        <>
        <p className='ppi'>💖 Your Valentine profile is ready, Share your love 💌
            </p>
        <div style={{ textAlign: "center" }}>
            
            <canvas style={{ borderRadius: "10px" }} ref={canvasRef} />
            <div className="btndiv isFlex">
                <Btn fn={copyLink} typ={3} msg="Copy 💖" />
                <Btn fn={shareQR} typ={5} msg="Send 💌" />
            </div>
            <Btn fn={downloadQR} typ={6} msg="Download 📋" />
            <Btn fn={()=>{window.open(link, "_blank")}} typ={2} msg="Preview 👀" />
           <Quick msg={msg.msg} setMsg={setMsg} />
        </div>
        </>
    );
}