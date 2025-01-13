import React from "react";
import '../Styles/HeaderNav.css';
import { Link } from "react-router-dom";
import { HiOutlineBars2 } from "react-icons/hi2";
import { useGSAP } from '@gsap/react';
import Carousal from "./Carousal";
import icon from '../Assets/icon.png'
import B4 from '../Assets/B4.jpg';
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

              {/* <div className="B_img" style={{width:"100%",height:"100vh",}}>
                <img src={B4} />
              </div> */}


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
     );
}

export default Header ;