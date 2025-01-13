import '../Styles/VertualT.css';

function VertualT() {
    return ( 
        <div className='container'>
            <div className='main'>
                <div className='col-5 text'>
                <span style={{fontSize:"20px",marginLeft:"-280px"}}>02</span><br/>
                        Exterior design
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

export default VertualT;