import { useEffect } from "react"
import "../../CssFile/Help-css/Quick.css"

export default function Quick({ msg, setMsg }) {

  useEffect(() => {
    if (!msg) return;

    const timer = setTimeout(() => {
      setMsg(prev => ({ ...prev, msg: "" }));
    }, 3000);

    return () => clearTimeout(timer);
  }, [msg, setMsg]);

  if (!msg) return null;

  return (
    <div className="quick">
      {msg}
    </div>
  );
}


