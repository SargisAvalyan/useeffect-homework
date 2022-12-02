import React, { useEffect, useState } from "react"
import "./style.scss"
import img1 from "../../images/big.jpg"
import img2 from "../../images/small.jpg"
const RandomNumber = () => {
    const [rnumber, setRnumber] = useState(0);
    


    const randomNumGenerator = () => {
        let x = 0
        x = Math.floor(Math.random() * 1000) + 1;
        setRnumber(x);
    }
    useEffect(() => {
        randomNumGenerator(setRnumber)
    }, []);

    return <div className="numberBox" >
        { (rnumber > 500) ?<div className="numberBoxIn" style={{backgroundImage:`url(${img1})`}}>
        <h3>{rnumber}{">>>"}500</h3>
        </div> :<div className="numberBoxIn" style={{backgroundImage:`url(${img2})`}}>
            <h3>{rnumber} {"<<<"}500</h3>
            </div>  }
    </div>
}
export default RandomNumber