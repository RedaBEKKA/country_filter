//const { default: PaysManager } = require("./containers/PaysManager/PaysManager");
import {BrowserRouter,Route,Link} from "react-router-dom"
import React from "react"
import PaysManager from "./containers/PaysManager/PaysManager"

function App() {
  return (
    <BrowserRouter>
        <Link to="/"> Page d'acceuil</Link>
        <Link to="/pays">Les pays</Link>
         <Route exact path='/' render={() => <h1 className="text-center">Page d'acceuil</h1>}/>
         <Route exact path='/pays' component={PaysManager}/>

    </BrowserRouter>   
  
  );
}

export default App;
