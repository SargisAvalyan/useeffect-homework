import React from "react"
import "./style.scss"

const ImageBox = ({image}) => {
        return <div className="image-box" style={{ backgroundImage: `url(${image.Image})` }} >
        <p>{image.name}</p>
      </div>
}
export default ImageBox