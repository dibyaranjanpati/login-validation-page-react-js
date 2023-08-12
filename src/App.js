import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import LogPage from "./Components/LogPage";
import Header from "./Components/Header";
import Protected from "./Components/Protected";
import AboutUs from "./Components/AboutUs";
import OurServices from "./Components/OurServices";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/logpage" element={<LogPage />} />
        {/* <Route exat path='/home' element={<Home/>}/> */}
        {/* <Route  path='/about' element={<Protected Components={()=> <AboutUs/>} />}/>
  <Route  path='/ourservices' element={<Protected Components={()=> <OurServices/>} />}/>
  <Route  path='/home' element={<Protected Components={()=> <Home/>} />}/> */}
        <Route element={<Protected />}>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/ourservices" element={<OurServices />} />
        </Route>
      </Routes>
      {/* <ProtectedRoute exat path='/home' Component={Home}/> */}

      {/* <LogPage/> */}
      {/* <Home /> */}

      {/* <Router>
     <Routes>
          <Route path="/login" element={<LogPage/>}/>
     
          <Route path="/home" element={<Home />}/>
            
          
        </Routes> 
        </Router> */}

      {/* <Home/> */}
    </>
  );
}

export default App;
