import React, { useState } from 'react'


function About() {

    const [ChageStyle,setChageStyle]=useState({
        backgroundColor:'white',
        color:'black',
        borderRadius:'10px',
        border:'1px solid black'
    })

    const [btnText,setbtnText]=useState("Dark Mode");

    const toggleDark=()=>{
        if(ChageStyle.color==='black'){
            setChageStyle({
                backgroundColor:'black',
                color:'green',
                border:'1px solid green',
                borderRadius:'10px'
            });

            setbtnText("Light Mode");
        }else{
            setChageStyle({
                backgroundColor:'white',
                color:'black',
                border:'1px solid black',
                borderRadius:'10px'
            })            
            setbtnText(" Dark Mode");
        }
    }

  return (


      <div  className='container my-4'>
        <h1 className='container mx-3' >About Us</h1>


    <div class="accordion" id="accordionExample" style={ChageStyle}>
        <div class="accordion-item" style={ChageStyle}>
            <h2 class="accordion-header">
            <button class="accordion-button" style={ChageStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Item-1 
            </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <strong>This is the first item’s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div class="accordion-item" style={ChageStyle}>
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" style={ChageStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
               Item-2
            </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <strong>This is the second item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div class="accordion-item" style={ChageStyle}>
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" style={ChageStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                 Item-3
            </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
    </div>

    <div className="container my-4 mx-3" >
        <button type='button' onClick={toggleDark}  className='btn btn-primary'>{btnText}</button>
    </div>      
    </div>
    
  )
}

export default About
