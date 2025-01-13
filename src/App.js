
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import HeaderLoder from './Component/HeaderLoder';
// import HeaderNav from './Component/HeaderNav';
import Header from './Component/Header';
import UP_Header from './Component/UP_Header';
import Footer from './Component/Footer';
import Home from './Component/Home';
import Design from './Component/Design';
import InDesign from './Component/InDesign';
function App() {
 
  return (

    <div className="App">
      <BrowserRouter>
      <header>
          <Header/>
      </header>
      
        <Routes>
          {/* <Route path="/" element={<HeaderLoder/>}/> */}
          <Route path='/' element={<Home/>}/>
          {/* <Route path='/UP_header' element={<UP_Header/>}/> */}

        </Routes>
      <div>
        {/* <UP_Header/>
        <Design/>
        <InDesign/> */}
      </div>

      <footer>
        <Footer/>
      </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
