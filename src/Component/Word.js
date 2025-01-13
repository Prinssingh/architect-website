import word from '../Assets/word.jpg';
function Word() {
    return ( 
        <div className='container'>
            <div className="image" style={{width:"100%",height:"100vh"}}>
                <div className='img'>
                    <img src={word} style={{width:"70%",paddingBottom:"1%"}}/>
                </div>
            </div>
                
        </div>
     );
}

export default Word;
