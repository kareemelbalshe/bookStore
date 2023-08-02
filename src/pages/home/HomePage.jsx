import React from 'react'
import HeadingTitle from "../../components/heading-title/HeadingTitle";
import Services from "../../components/services/Services";
import Slider from "../../components/slider/Slider"
import {books} from "../../data/books"
import BookSlider from "../../components/book-slider/BookSlider"



export default function HomePage() {
  return (
    <>
    <Slider/>
    <Services/>
    <HeadingTitle title="Most gifted" />
    <BookSlider data={books}/>
    <HeadingTitle title="Best seller" />
    <BookSlider data={books}/>
    <HeadingTitle title="Most Widhed for" />
    <BookSlider data={books}/>
    </>
  )
}
