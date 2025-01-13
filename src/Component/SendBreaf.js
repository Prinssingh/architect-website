import '../Styles/SendBreaf.css';
import send from '../Assets/send.jpg';
function SendBreaf() {
    return ( 
        <div className='container' style={{height:"100vh"}}>
            <div className="Send-main" >
                <div className='img'>
                    <img src={send} style={{width:"65%",marginTop:"38%"}}/>
                </div>
                <div className='Send-t-box'>
                    
                    <div className='detail-text'>
                    <span > 01 </span>
                    <p style={{fontSize:"56px",fontWeight:"500",color:"white"}}>Send brief</p>
                    <p> Send us a completed brief along
                        with documents & requirements to 
                        estimate the project & get started.</p>
                    </div>
                    
                </div>
            </div>
                
        </div>
     );
}

export default SendBreaf;