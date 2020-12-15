//const { default: PaysManager } = require("./containers/PaysManager/PaysManager");
import {BrowserRouter,Route} from "react-router-dom"
import React from "react"
import PaysManager from "./containers/PaysManager/PaysManager"
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
       
         <Route exact path='/' render={() => <h1 className="text-center">Page d'acceuil</h1>}/>
         <Route  path='/pays' exact component={PaysManager}/>
         <Route exact path='/pays/:id' render={(props) => <h1 className="text-center">Page du pays {props.match.params.id}</h1>}/>
    </BrowserRouter>   
  
  );
}

export default App;
