import React, { useState } from 'react';
import dataSlider from './dataSlider';
import rigthArrow from './icons/arrow-right.svg'
import leftArrow from './icons/arrow-left.svg'
import './slider.css'

function BtnSlider({ direction, moveSlide }){
  
  return(
    <button 
      onClick={ moveSlide }  
      className={ direction === 'next'? 'btn-slide next': 'btn-slide prev' } >
      <img src={  direction === 'next'? rigthArrow: leftArrow } alt="" />
    </button>
  )
}


function Slider() {

  const [ slideIndex, setSlideIndex] = useState( 1 )
  
  const nextSlide = () => {
    if( slideIndex !==  dataSlider.length ){
      setSlideIndex( slideIndex + 1 )
    } else if( slideIndex === dataSlider.length ){
      setSlideIndex( 1 )
    }
  }

  const prevSlide = () => {
    if( slideIndex !== 1 ){
      setSlideIndex( slideIndex - 1 )
    } else if( slideIndex === 1 ){
      setSlideIndex( dataSlider.length )
    }
  }

  return (
    <div className='container-slider'>
        <img 
          className='logo-image'
          src={process.env.PUBLIC_URL + `logo.png`} 
          alt="" 
        />
        {dataSlider.map(( obj, index ) => {
          return(
            <div 
              key={ obj.id }
              className={ slideIndex === index + 1? 'slide active-anim': 'slide' }
            >
              <img src={ process.env.PUBLIC_URL + `/Img/img${ index + 1  }.jpg` } 
              alt="" />
            </div>
          )
        })}
        <BtnSlider moveSlide={ nextSlide } direction={'next'} />
        <BtnSlider moveSlide={ prevSlide } direction={'prev'} />
    </div>
  );
}

export default Slider;