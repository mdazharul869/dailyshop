
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import WebFont from "webfontloader";
import './App.scss';
import Foter from './component/layout/Footer/Foter';
import { HeaderSecend } from './component/pages/HeaderCustom/HeaderSecend';

function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

  
  }, []);



  return (
    <>
      <div className='App'>  
    
         <HeaderSecend />      
         <Outlet />
      
         <Foter />
       
               
      </div>
  
   

    </>
  )
}

export default App
