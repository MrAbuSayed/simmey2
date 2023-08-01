// import logo from './logo.svg';
import { createContext, useState } from 'react';
import './App.css';
import Navber from './Components/Nav/Navber';
import AllRoute from './Components/Route/AllRoute';

export const BackgroundChange= createContext({});

function App() {

  const [background,setBackground]=useState({backgroundColor:'rgb(0,0,0)',color:'white'});
  const year=new Date().getFullYear();
  return (
     <BackgroundChange.Provider value={[background,setBackground]}>
        <div className="App" style={background}>
        
        <div className="navSec">
        <Navber/>
        </div>
        <div className="allSec">
          <AllRoute/>
        </div>

        </div>
        <h3 style={{textAlign:'center',fontStyle:'italic'}}>&copy;Copyright By MR.Abu Sayed .All Right Reserve (2021-{year}) </h3>
      </BackgroundChange.Provider>
  );

};

export default App;
