import React, { useEffect, useState } from 'react'
import "./style.scss"

const InputValid =()=>{
    const [value, setValue] = useState("");
    // const [newArray, setNewArray] = useState([]);
    const [stringlengt, setStringlengt] = useState(false);
  

    useEffect(() => {
    console.log(stringlengt);
    setStringlengt(value)
        if(stringlengt.length>20){
            
        setStringlengt(true)}
    }, [value]);
    useEffect(() => {
       
       
    }, []);
   

    const handleChange=(e)=>{
        setValue(e.target.value)
      
    }

    return <div className='input-valid'>
<label>
    <input style={({stringlengt})?{ color:"red"}:{ color:"green"}} type ="text" value={value} onChange={ handleChange}/>
</label>
    </div>
}
export default InputValid