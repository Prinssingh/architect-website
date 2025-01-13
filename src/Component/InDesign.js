import IN_D from '../Assets/IN_D.jpg';
import '../Styles/InDesign.css'
function InDesign() {
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

                    <div className='image'>
                        <img src= {IN_D} style={{width:"100%",height:"70vh",marginTop:"20%",borderRadius:"50px"}} />
                    </div>

                </div>
            </div>
            
        </div>
     );
}

export default InDesign;