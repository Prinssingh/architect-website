import '../Styles/B-touch.css';
import touch from '../Assets/touch.jpg';

function B_Touch() {
    return (  
        <div className='container touch' style={{height:"100vh"}}>
            <div className="Tuch-main" >
                
                <div className='Tuch-t-box'>
                    
                    <div className='detail-text'>
                    <span > 01 </span>
                    <p style={{fontSize:"56px",fontWeight:"500",color:"white"}}>Send brief</p>
                    <p> Send us a completed brief along
                        with documents & requirements to 
                        estimate the project & get started.</p>
                    </div>
                    
                </div>

                <div className='img'>
                    <img src={touch} style={{width:"80%",marginTop:"38%"}}/>
                </div>

            </div>
                
        </div>
    );
}

export default B_Touch ;
       