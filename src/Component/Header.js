import React from "react";
import '../Styles/HeaderNav.css';
import { Link } from "react-router-dom";
import { HiOutlineBars2 } from "react-icons/hi2";
import { useGSAP } from '@gsap/react';
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
            delay:2,
           stagger:-0.5
    })
      })
    return ( 
        <div className=" container-fluid header ">
            {/* --------cursor------- */}
             <div className="cursor"
                style={{
                    width:"10px",
                    height:"10px",backgroundColor:"white",borderRadius:"50%",
                    position:"fixed"
                
                }}
              >
            
              </div>

            <div className="navBar">
                {/* image here   */}
            <h1>
                <img src="../Assets/646053129870115.62e86fd10669e.png"/>
            </h1>
                <ul>
                    <li><Link className="nav" to="/">Services</Link></li>
                    <li><Link className="nav"  to="/about">Project</Link></li>
                    <li><Link className="nav" to="/services">FAQ</Link></li>
                    <li><Link className="nav" to="/contact">About</Link></li>
                    <li><Link className="nav" to="/btnEP">
                        <button className="navBtnEP">Estimate Project </button>
                    </Link></li>  
               </ul>
               <h1 className="twoLine" >
               <HiOutlineBars2 />
               </h1>
             
            </div>
            <h1 className="ADV">Architecture.Design.visulization </h1>            
        </div>
     );
}

export default Header ;