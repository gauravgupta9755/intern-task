import React from 'react'
import "./css/section1.css"

const Section1= ()=>{
    return (<>
    <div className='section1'>
    <div className='section1_left'>
    <div id='s1_t' className='s1'>
        <span className='heading'>
        Your marketing team,<br></br>from the ground up
        </span>
    </div>
    <div id='s1_m' className='s1'>
        <p className='para'>
        Your plan? We understand.this is why we do what we do,and can provide you with in experience like on another.
        </p>
    </div>
    <div id='s1_b' className='s1'>
        <div className='button_container'>
        <button className='btn'>GET STARTED</button>
        <button className='s1_button btn1'>LEARN MORE &rarr;</button>
        </div>
    </div>
    </div>
    <div className='section1_right'>
        {/* <img src="./image/atlas.png"></img> */}
    </div>
    </div>
    
    </>)
}

export default Section1;