import IN_D from '../Assets/IN_D.jpg';
import '../Styles/InDesign.css'
import React, { useEffect, useRef, } from "react";
function InDesign() {

    //  const cursorRef = useRef(null);
    
    //       useEffect(() => {
    //         const cursor = cursorRef.current;
        
    //         const handleMouseMove = (event) => {
    //           if (cursor) {
    //             cursor.style.left = `${event.clientX}px`;
    //             cursor.style.top = `${event.clientY}px`;
    //           }
    //         };        
    //         // Add the event listener to capture mouse movements for entire page
    //         document.addEventListener("mousemove", handleMouseMove);
        
    //         return () => {
    //           // Cleanup the event listener when the component unmounts
    //           document.removeEventListener("mousemove", handleMouseMove);
    //         };
    //       }, []);

    return ( 
        <div className='container main'>
            <div className='main'>
                <div className='col-5 text'>
                   <span style={{fontSize:"20px",marginLeft:"-280px"}}>01</span><br/>
                    Interior design
                    <br/>
                    <button className='btn-V_More'>view more</button>

                </div>

                <div className='col-5 image-box'>
                {/* <div
                id="cursor"
                ref={cursorRef}
                style={{
                marginBottom:"18vh",
                width: "2.5vh",
                height: "2.5vh",
                backgroundColor: "white",
                borderRadius: "50%",
                pointerEvents: "auto", 
                transform: "translate(-50%, -50%)", 
                zIndex: 1000, 
                }}  
                >     
                Click
            </div> */}

                    <div className='image'>
                        <img src= {IN_D} style={{width:"100%",height:"70vh",marginTop:"20%",borderRadius:"50px"}} />
                    </div>

                </div>
            </div>
            
        </div>
     );
}

export default InDesign;