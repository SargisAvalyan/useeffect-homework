import React, { useEffect, useRef, useState } from "react"
import "./style.scss"

const ConteinerBox = () => {
    const [randomColor, setrandomColor] = useState("");
    const [x, setX] = useState("");
    const [y, setY] = useState("");
    const handleChangeColor = () => {
        const randomingcolor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        setrandomColor(randomingcolor)
    }

    const buttonStyle = () => {
        let randomStyleX = Math.floor(Math.random() * 1000);
        let randomStyleY = Math.floor(Math.random() * 300);
        if (randomButton.current) {
            randomButton.current.style.left = randomStyleX + "px";
            randomButton.current.style.top = randomStyleY + "px"
        }
        setX(randomStyleX)
        setY(randomStyleY)
    }

    const inpfocus = useRef()
    const randomButton = useRef()
    const handleFoucus = () => { };
    const handleClick = () => {
        if (inpfocus.current) {
            inpfocus.current.focus();
            inpfocus.current.style.borderColor = "red"
            inpfocus.current.style.backgroundColor = "green"
        }
    }
    useEffect(() => { handleChangeColor() }, [])
    useEffect(() => { buttonStyle() }, [])






    return <div className="G-Conteiner" style={{ backgroundColor: `${randomColor}` }} >
        <div className="G-ConteinerBox">
            <button className="clrbutton" onClick={handleClick}>CLick Focus</button>
            <button className="clrbutton" ref={randomButton} onClick={buttonStyle}>Random</button>
        </div>
        <label>
            <input className="focusInput" type="text" ref={inpfocus} onFocus={handleFoucus} />
        </label>
        <p style={{ fontSize: "25px" }}>X={x} ..... Y={y}</p>
    </div>
}
export default ConteinerBox