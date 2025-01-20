import React, { useEffect, useRef, } from "react";
import '../Styles/HeaderNav.css';
import { Link } from "react-router-dom";
import { HiOutlineBars2 } from "react-icons/hi2";
import { useGSAP } from '@gsap/react';
import icon from '../Assets/icon.png'
import gsap from 'gsap';
function Header() {
    useGSAP(()=>{
            gsap.from(".navBar",{
                y:-20,
                opacity:0,
                duration:1
        })
        gsap.from(".ADV",{
            y:-30,
            opacity:0,
            duration:3,
            delay:1,
           stagger:-0.5
    })
    gsap.from("#cursor",{
        x:500,
        duration:1,
        delay:2,
        
    })
      })

      const cursorRef = useRef(null);

      useEffect(() => {
        const cursor = cursorRef.current;
    
        const handleMouseMove = (event) => {
          if (cursor) {
            cursor.style.left = `${event.clientX}px`;
            cursor.style.top = `${event.clientY}px`;
          }
        };
    
        // Add the event listener to capture mouse movements for entire page
        document.addEventListener("mousemove", handleMouseMove);
    
        return () => {
          // Cleanup the event listener when the component unmounts
          document.removeEventListener("mousemove", handleMouseMove);
        };
      }, []);
    
    return ( 
        <div className=" container-fluid header ">
            {/* --------cursor------- */}
            
            <div
                id="cursor"
                ref={cursorRef}
                style={{
                  position: "absolute",
                position:"fixed",
                marginBottom:"18vh",
                width: "1.5vh",
                height: "1.5vh",
                backgroundColor: "white",
                borderRadius: "50%",
                pointerEvents: "auto", 
                transform: "translate(-50%, -50%)", 
                zIndex: 1000,
                }}  
                >     
            </div>

            {/* ------Vedio here---- */}
            <div className="vedioContainer" >
              
              <video autoPlay loop  muted >
                <source src="/Vedios/backVedio.mp4" type="video/mp4" />
              </video>

            </div>

            <div className="navBar">
                {/* image here   */}
            <h1>
                <img src={icon} style={{width:"4rem",borderRadius:"6px"}}/>
            </h1>
                <ul>
                    <li><Link className="nav" to="/">Services</Link></li>
                    <li><Link className="nav"  to="/about">Project</Link></li>
                    <li><Link className="nav" to="/services">FAQ</Link></li>
                    <li><Link className="nav" to="/contact">About</Link></li>
                    
               </ul>               
             
            </div>

            <div className="navBtn">
            <Link to="/navFixBtn">
                        <button className="navFixBtn" >Estimate Project </button>
            </Link>
            </div>   

             <div className="twoLine">
             <h1 >
                <Link to="/OtherNavLine " style={{color:"white"}}>
                <HiOutlineBars2 />
                </Link>
                
            </h1>
             </div>
            
            <h1 className="ADV">Architecture.Design.visulization </h1>            
        </div>
        // </div>
     );
}

export default Header ;