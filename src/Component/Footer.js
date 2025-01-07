import '../Styles/Footer.css'
function Footer() {
    return (
        <div className='container'>
           <div className='footer' >
                <p className='p_htext'>We are always happy to help</p>
                <button className='btn_SB'>
                    Send brief
                </button>
                <button className='btn_Cont'>
                    Contact us
                </button>

                <div className='E_email'>
                am@am-arc.com
                <hr style={{width:'100px'}}/>
                Mechnykova St, 2, Kyiv, 02000
                </div>

                <div className='So_media'>
                    <div className='be_icon'>
                         {/* ---be icon--- */}
                    
                    </div>     
                    <div className='up_icon'>
                         {/* ---up icon--- */}
                    
                    </div> 
                    <div className='insta_icon'>
                         {/* ---insta icon--- */}
                    
                    </div> 
                    <div className='tele_icon'>
                         {/* ---tele icon--- */}
                    
                    </div> 
                    <div className='wa_icon'>
                         {/* ---wa icon--- */}
                    
                    </div>  
                    <div className='P_Policy'>
                         
                         Privacy Policy
                    </div>  
                                 
                </div>
            </div>
        </div>
      );
}

export default Footer;