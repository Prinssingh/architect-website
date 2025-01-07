
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import HeaderLoder from './Component/HeaderLoder';
// import HeaderNav from './Component/HeaderNav';
import Header from './Component/Header';
import UP_Header from './Component/UP_Header';
import Footer from './Component/Footer';
function App() {
 
  return (

    <div className="App">

      <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<HeaderLoder/>}/> */}
        <Route path="/" element={<Header/>}/>
        <Route path='/UP_Header' element={<UP_Header/>}/>
        <Route path='/Footer' element={<Footer/>}/>

        {/* <Route path="/HeaderNav" element={<HeaderNav/>}/> */}

      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
