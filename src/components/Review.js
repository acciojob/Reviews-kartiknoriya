import React, { useState } from 'react'
import Reviews from './data'
import  './style.css';

const Review = () => {
   
   const [currentIndex , setCurrentIndex] = useState(0);
   
   const { id,name, job, image, text } = Reviews[currentIndex]
   
   function handleSuprise(){
      const random = Math.floor(Math.random() * Reviews.length);
       console.log( 'random ',random)
          setCurrentIndex(currentIndex => currentIndex = random)
   }
  
   function handlePrev(){ 
        if(currentIndex == 0){
             setCurrentIndex(Reviews.length)
        } 
        setCurrentIndex(currentIndex => currentIndex - 1 )
     }

   function handleNext(){ 
      if(currentIndex == Reviews.length-1){
             setCurrentIndex(Reviews.length-Reviews.length-1)  
        } 
        setCurrentIndex(currentIndex => currentIndex + 1 )
     }
   
  return (
     <>
       <div className="review"> 
      
        <p className='author' id={`author-${id}`} >Name : {name}</p>
        <p className='job' >job  : {job}</p>
        <p className='info'>text  : {text}</p>
        <div className="image-container" > <img className="person-img" src={image}></img></div>
        
             <button className='prev-btn' onClick={()=>handlePrev()}>Previous</button>
             <button className='next-btn' onClick={() => handleNext()}>Next</button>
             <button className='random-btn' onClick={() =>handleSuprise()}>surprise me</button>
        </div> 
       
     </>

  )
}

export default Review