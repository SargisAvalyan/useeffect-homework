import React, { useEffect, useState } from "react"
import ImageBox from "./ImageBox"
import image1 from "../../images/carimg1.jpeg"
import image2 from "../../images/carimg2.jpg"
import image3 from "../../images/carimg3.jpg"
import image4 from "../../images/carimg4.jpg"
import image5 from "../../images/carimg5.jpg"
import image6 from "../../images/carimg6.jpg"
import image7 from "../../images/carimg7.jpg"
import image8 from "../../images/carimg8.jpg"
import image9 from "../../images/carimg9.jpg"
import image10 from "../../images/carimg10.jpg"
import "./style.scss"
const ImageBoxes = () => {
    const [imageList, setImageList] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setImageList([
                { Image: image1},
                { Image: image2},  
                { Image: image3},  
                { Image: image4}, 
                { Image: image5}, 
                { Image: image6}, 
                { Image: image7},  
                { Image: image8},  
                { Image: image9}, 
                { Image: image10},
            ])
        }, 3000)

    }, []);

    useEffect(() => {
        if (imageList.length) {
            setLoading(false)
            console.log(imageList);
        }
    }, [imageList])

    return <div className="image-boxes">
        {!loading ? <div className="image-box-cont">
            {imageList.length ? imageList.map((item, index) => {
                return <ImageBox key={index} image={item} />
            }) : <p>Empty Product List</p>}
        </div> : 
        <div className="Loading">
       Loading...
        </div>}
        
       
    </div>
}
export default ImageBoxes
