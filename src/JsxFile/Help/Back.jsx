import '../../CssFile/Help-css/Back.css'
export default function back() {
    return (
        <svg
         className="bbacku"
          viewBox="0 0 1024 1024"
          onClick={()=>window.history.back()}
            >
           <path  d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"></path>
                <path d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z">
                </path>
        </svg>
    )
}