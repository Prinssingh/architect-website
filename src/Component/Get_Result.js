import '../Styles/Getresult.css';
import result from '../Assets/result.jpg'

function Get_Result() {
    return (  
        <div className='result container'>
            <div className="Result-main" >
                <div className='img'>
                    <img src={result} style={{width:"65%",marginTop:"38%"}}/>
                </div>
                <div className='Result-t-box'>
                    
                    <div className='detail-text'>
                    <span > 03 </span>
                    <p style={{fontSize:"56px",fontWeight:"500",color:"white"}}>Get Result</p>
                    <p> Send us a completed brief along
                        with documents & requirements to 
                        estimate the project & get started.</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Get_Result;