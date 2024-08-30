

import React, { useRef, useState } from 'react'
import './images.css';
function ImageUpload() {

    const inputRef = useRef(null);
    const [image, setImage] = useState("");

    const handleImageClick = () => {
        inputRef.current.click();
    }


    const handleImageChange = (event) => {
        const file=event.target.files[0];
        console.log(file);
        setImage(event.target.files[0]);
    }
    return (
        <div>
            <div  className='image-upload-container' onClick={handleImageClick}>
            {image?(
                <img src={URL.createObjectURL(image)} alt="not found" className='img-display-after' />
            ):
            (<img src={'upload.jpg'} alt="logo" className='img-display-before' />

            )}

            <input type="file"
             ref={inputRef} 
             onChange={handleImageChange} 
             style={{ display: "none" }}></input>
        </div>
        <button>Upload here</button>
        </div>
    )
}

export default ImageUpload