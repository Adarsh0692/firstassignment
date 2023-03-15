import React, { useState } from 'react'
import './ChangeImage.css'

function ChangeImage(){

    let img1= 'https://image.benq.com/is/image/benqco/x3000i-homepage-banner-800x450?$ResponsivePreset$';
    let img2= 'https://www.igeeksblog.com/wp-content/uploads/2022/07/Reduce-Photo-Size-On-iPhone-800x450.jpg';
    let img3= 'https://thumbs.dreamstime.com/b/bridge-humans-forest-made-up-tree-branches-same-size-bridge-humans-forest-made-up-220589884.jpg'

    const [image, setImage]= useState(img1)

   function handleImage(){
    
    if(image === img1){
        setImage(img2)
    }else if(image===img2){
        setImage(img3)
    }else{
        setImage(img1)
    }
    
   }

    return (
        <div className='body'>
            <div className='imagediv'>
                <img  src={image} alt="imageName" />
            </div >
            <div className='btn'>
                <button className='button' onClick={handleImage}>Change Image</button>
            </div>
        </div>
    )
}

export default ChangeImage