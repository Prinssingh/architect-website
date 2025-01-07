import { Link } from 'react-router-dom';
import '../Styles/Footer.css'
import { FaBehance, FaInstagram, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
function Footer() {
    return (
        <div className='container-fluid'>
           <div className='container-sm footer' >
                <p className='p_htext'>We are always happy to help</p>
                <button className='btn_SB'>
                    Send brief
                </button>
                <button className='btn_Cont'>
                    Contact us
                </button>

                <div className='E_email'>
                am@am-arc.com
                <hr style={{width:'100%',marginLeft:"1%",marginTop:"2%"}}/>              
                <p style={{fontSize:"8px",marginTop:"2%",color:"rgb(139, 138, 138)"}}>
                Mechnykova St, 2, Kyiv, 02000
                </p>
                </div>
                

                <div className='So_media'>
                    <div className='be_icon'>
                         {/* ---be icon--- */}
                         <FaBehance />
                    
                    </div>     
                    <div className='up_icon'>
                         {/* ---up icon--- */}
                         <h5>up</h5>
                    </div> 
                    <div className='insta_icon'>
                         {/* ---insta icon--- */}
                         <FaInstagram />
                    
                    </div> 
                    <div className='tele_icon'>
                         {/* ---tele icon--- */}
                         <FaTelegramPlane />
                    </div> 
                    <div className='wa_icon'>
                         {/* ---wa icon--- */}
                         <FaWhatsapp />
                    
                    </div>  
                    <div className='P_Policy'>
                         
                         Privacy Policy
                    </div> 
                    <div className='D_DEV'>
                         
                    Design & Development 
                    </div>                    
                        
                </div>
                <div className='de_VEB'>                         
                         <a href='https://deveb.co/' style={{color:"white"}}>de  veb</a>
                    </div> 
            </div>
        </div>
      );
}

export default Footer;