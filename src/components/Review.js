import React, { useState } from 'react'
import Reviews from './data'
import  './style.css';

const Review = () => {
   
   const [currentIndex , setCurrentIndex] = useState(0);
   
   const { id,name, job, image, text } = Reviews[currentIndex]
   
   function handleSuprise(){
      const random = Math.floor(Math.random() * 3);
       console.log( 'random ',random)
          setCurrentIndex(currentIndex => currentIndex = random)
   }
  
   function handlePrev(){ 
        if(currentIndex == 0){
                return;
        } 
        setCurrentIndex(currentIndex => currentIndex - 1 )
     }

   function handleNext(){ 
      if(currentIndex == 3){
                return;
        } 
        setCurrentIndex(currentIndex => currentIndex + 1 )
     }
   
  return (
     <>
       <div className="review"> 
         
         <h2  id="review-heading"> Our Reviews </h2>
        <p className='author' author-id={id} >Name : {name}</p>
        <p className='job' >job  : {job}</p>
        <p className='info'>text  : {text}</p>
        <div className="image-container" > <img className="person-img" src={image}></img></div>
        
        </div> 
       
        <div>
            
             <button className='prev-btn' onClick={()=>handlePrev()}>Previous</button>
             <button className=' next-btn' onClick={() => handleNext()}>Next</button>
             <button className='random-btn' onClick={() =>handleSuprise()}>surprise me</button>
        </div>
     </>

  )
}

export default Review