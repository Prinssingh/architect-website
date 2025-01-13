
import AnimationP from "./AnimationP";
import B_Touch from "./B_Touch";
import D_Rendring from "./D_Rendring";
import Design from "./Design";
import ExDesign from "./ExDesign";
import Footer from "./Footer";
import Get_Result from "./Get_Result";
import Header from "./Header";
import InDesign from "./InDesign";
import SendBreaf from "./SendBreaf";
import UP_Header from "./UP_Header";
import Visulazation from "./Visulazation";
import VR from "./VR";
import Word from "./Word";
function Home() {
    return ( 
        <div className="container home">
           
            <div className="UP_LM">
               {/* <UP_Header/> */}
            </div>

            
            <div className="All">
                <Design/>
                <UP_Header/>
                <InDesign/>
                <ExDesign/>
                <Visulazation/>
                <D_Rendring/>
                <AnimationP/>
                <VR/>

                <Word/>
                <SendBreaf/>
                <B_Touch/>
                <Get_Result/>
            </div>
        </div>
     );
}

export default Home;