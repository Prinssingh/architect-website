import react from "react";
import Header from "./Header";
import UP_Header from "./UP_Header";
import Footer from "./Footer";

function AllComp() {
    return ( 
        <div className="container">

            <div className="header">
                {/* <HeaderNav/> */}
                <Header/>
            </div>
            <div className="UP_LM">
               <UP_Header/>
            </div>

            <div className="footer">
                <Footer/>
            </div>
        </div>
     );
}

export default AllComp;