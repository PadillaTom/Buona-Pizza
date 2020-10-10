import React, {useState, useEffect} from 'react'
import {GrPrevious, GrNext} from "react-icons/gr"
import sliderImgs from "./sliderImgs"

// Main.
function SliderMain() {
 const [image, setImage] = useState(sliderImgs);
 const [index, setIndex] = useState(0);

 // Array Last item or -1 Item:
 useEffect(()=>{
     const lastIndex = image.length -1;
if (index < 0){
    setIndex(lastIndex)
}
if (index > lastIndex){
    setIndex(0)
}
 },[index,image])
 
 // Auto Play:
 useEffect(()=>{
let sliderTimer = setInterval(()=>{
setIndex(index +1)
},3600);
return ()=> clearInterval(sliderTimer)
 },[index])

    // Main:
    return (
        <section className="section">
            <div className="gallery-container">
{image.map((imageItem, imageIndex)=>{
    const {id, image} = imageItem;
    // More Stuff:
    let position ="nextSlide";
    if (imageIndex === index){
        position= "activeSlide"
    }
    if(imageIndex === index-1 || (index === 0 && imageIndex === image.length-1 )){
        position= "lastSlide"
    }
    return <article key={id} className={`slider-article ${position}`} >
        <img   src={image} alt="gallery" className="gallery-img"/>
        </article>
   
})} 
<button className="slide-btn prev-slide" onClick={()=>setIndex(index-1)}>
    <GrPrevious></GrPrevious>
</button>
<button className="slide-btn next-slide" onClick={()=>setIndex(index+1)}>
    <GrNext></GrNext>
</button>
</div>
            
        </section>
    )
}

export default SliderMain
