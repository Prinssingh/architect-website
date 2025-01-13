import { Link } from "react-router-dom";

function OtherNavLine() {
    return ( 
        <div className="container-fluid " style={{display:"flex",backgroundColor:"white"}}>
            <div className="col-5 social-media ">
                <div className="touch">
                    <a href=" ">
                        am@am-are.com
                    </a>
                </div>
                <div className="social">
                    <Link to=" ">
                        instagram
                    </Link>
                    <Link to=" ">
                        Whatsapp
                    </Link>
                    <Link to=" ">
                        Teligram
                    </Link>
                    <Link to=" ">
                        Behance
                    </Link>
                    <Link to=" ">
                        Upwork
                    </Link>
                    
                </div>
            </div>

            <div className="col-5 containt">

                <h1 className="inCont">Services</h1>
                <h1 className="inCont">Project</h1>
                <h1 className="inCont">About</h1>
                <h1 className="inCont">Contact</h1>
                <h1 className="inCont">FAQ</h1>

            </div>
        </div>
     );
}

export default o;