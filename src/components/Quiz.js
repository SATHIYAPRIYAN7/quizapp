import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Quiz() {

  useEffect(()=>{
    

    async function getquiz(){
      const res=await fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy")
      const data=await res.json();

      console.log(data);
    }

    getquiz();
  })
  return (
  <div>
    
  </div>
  )
}

export default Quiz