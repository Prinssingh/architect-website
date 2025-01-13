import B3 from '../Assets/B3.jpg'
function Design() {
    return ( 
        <div className="container main">
            <div className="image" style={{width:"100%",height:"100%"}}>
                <div className='img'>
                    <img src={B3} style={{width:"85%",borderRadius:"80px",}}/>
                </div>
                <div className='imgText' style={{fontSize:"100px",color:"white",width:"100%",position:"absolute",
                   marginTop:"-30%"
                }}>
                    <p style={{fontSize:"25px"}}>01</p>
                    <p>Design</p>
                </div>
               
  
            </div>
        </div>
     );
}

export default Design;