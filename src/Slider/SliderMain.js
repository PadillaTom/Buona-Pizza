import React, {useState, useEffect} from 'react'
import {GrPrevious, GrNext} from "react-icons/gr"
import sliderImgs from "./sliderImgs"

// Main.
function SliderMain() {
 const [image, setImage] = useState(sliderImgs);
 const [index, setIndex] = useState(0);

    // Main:
    return (
        <section className="section">
            <div className="gallery-container">
{image.map((imageItem, imageIndex)=>{
    const {id, image} = imageItem;
    // More Stuff
    return <article key={id}>
        <img src={image} alt="gallery"/>
    </article>
})} 
<button className="prev-slide">
    <GrPrevious></GrPrevious>
</button>
<button className="next-slide">
    <GrNext></GrNext>
</button>
</div>
            
        </section>
    )
}

export default SliderMain
