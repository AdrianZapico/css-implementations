import React from 'react'
import './Icons.css'

const Icons = () => {
  
    function eat(){
        return '🍔'
    }
    function sleep(){
        return '😴'
    }  
    function code(){
        return '👨‍💻'
    }
    function repeat(){
        return '🔁'
    }
    return (
    <div className='icons-container'>
        <div className='grid-container-icons'>
        <div className='icons'onClick={()=>alert(eat())}>
           <p>eat(🍔);</p> 
        </div>
        <div className='icons' onClick={()=>alert(sleep())}>
            <p>sleep(😴);</p>
        </div>
        
        <div className='icons' onClick={()=>alert(code())}>
            <p>code(👨‍💻);</p>
        </div>
        <div className='icons' onClick={()=>alert(repeat())}>
            <p>repeat(🔁);</p>
        </div>
        </div>
    </div>
  )
}

export default Icons