import b2 from '../Assets/b2.jpg';

function Visulazation() {
    return ( 
        <div className='container'>
            <div className="image" style={{width:"100%",height:"100%"}}>
                <div className='img'>
                    <img src={b2} style={{width:"85%",borderRadius:"80px",}}/>
                </div>
                <div className='imgText' style={{fontSize:"100px",color:"white",width:"100%",position:"absolute",
                   marginTop:"-30%"
                }}>
                    <p style={{fontSize:"25px"}}>02</p>
                    <p>Visulazation</p>
                </div>
            </div>
        </div>
     );
}

export default Visulazation;