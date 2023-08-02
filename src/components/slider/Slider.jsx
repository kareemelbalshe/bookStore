import './slider.css'
import { useState } from 'react'
import FirstBook from "../../images/book1.png"
import secondtBook from "../../images/book2.png"
import thirdBook from "../../images/book3.png"

export default function Slider() {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick=(direction)=>{
        if(direction==="left"){
            setSlideIndex(slideIndex>0? slideIndex -1 : 2)
        }
        else{
            setSlideIndex(slideIndex<2? slideIndex+1:0)
        }
    }
  return (
    <>
        <div className="slider-container"> 
            <i onClick={()=>handleClick("left")} className="bi bi-chevron-double-left arrow-left"></i>
            <div style={{transform:`translateX(${slideIndex * -100}vw)`}} className="slider-wrapper">
                <div className="slide first-slide">
                    <div className="slide-img-wrapper">
                        <img src={FirstBook} alt="" />
                    </div>
                    <div className="slide-info-wrapper">
                        <h1 className="slide-info-title">Book Store</h1>
                        <p className="slide-info-desc">
                            It's not just reading, it's an adventure.
                        </p>
                    </div>
                </div>
                <div className="slide second-slide">
                    <div className="slide-img-wrapper">
                        <img src={secondtBook} alt="" />
                    </div>
                    <div className="slide-info-wrapper">
                        <h1 className="slide-info-title">Book Store</h1>
                        <p className="slide-info-desc">
                            It's not just reading, it's an adventure.
                        </p>
                    </div>
                </div>
                <div className="slide third-slide">
                    <div className="slide-img-wrapper">
                        <img src={thirdBook} alt="" />
                    </div>
                    <div className="slide-info-wrapper">
                        <h1 className="slide-info-title">Book Store</h1>
                        <p className="slide-info-desc">
                            It's not just reading, it's an adventure.
                        </p>
                    </div>
                </div>
            </div>
            <i onClick={()=>handleClick("right")}  className="bi bi-chevron-double-right arrow-right"></i>
        </div>
    </>
  )
}
