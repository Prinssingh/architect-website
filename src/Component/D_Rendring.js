import '../Styles/D_rendring.css';
import D_R from '../Assets/D_R-1.jpg'

function D_Rendring() {
    return ( 
        <div className='container'>
            <div className='main'>
                <div className='col-5 text'>
                <span style={{fontSize:"20px",marginLeft:"-280px"}}>01</span><br/>
                        3D Rendring
                    <br/>
                    <button className='btn-V_More'>view more</button>

                </div>

                <div className='image'>
                <img src={D_R} style={{ width:"52%",height:"70vh",marginTop:"5%",borderRadius:"50px"}} />
            </div>

            </div>

        </div>
     );
}

export default D_Rendring;