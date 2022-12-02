import React, { useEffect, useState } from "react"
import "./style.scss"

const ConteinerBox = () => {
    const [randomColor, setrandomColor] = useState("");
    const handleChangeColor = () => {
        const randomingcolor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        setrandomColor(randomingcolor)
      
    }

    useEffect(() => { handleChangeColor() }, [])

    return <div className="G-Conteiner">
        <div className="G-ConteinerBox" style={{ backgroundColor: `${randomColor}` }} >
            <button className="clrbutton" onClick={handleChangeColor}>Click Me</button>
            <h1 style={{fontSize: "50px"}}> 
            Էջի գույնը փոխելու համար թարմացրու էջը կամ պարզապես քլիքիր ;)</h1>
        </div>

    </div>
}
export default ConteinerBox