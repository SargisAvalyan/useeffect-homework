import React, { useEffect, useState } from 'react'
import "./style.scss"

const InputValid =()=>{
    const [value, setValue] = useState("");
    const [newArray, setNewArray] = useState([]);
    const [stringlengt, setStringlengt] = useState(false);
    console.log(newArray);


    useEffect(() => {
        newArray.push(value)
        setNewArray([value])
    }, [value]);
    useEffect(() => {
        setStringlengt(true)
    }, []);
   

    const handleChange=(e)=>{
        setValue(e.target.value)
      
    }

    return <div className='input-valid'>
<label>
    <input type ="text" value={value} onChange={ handleChange}/>
</label>
    </div>
}
export default InputValid