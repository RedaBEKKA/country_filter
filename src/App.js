//const { default: PaysManager } = require("./containers/PaysManager/PaysManager");
import {BrowserRouter,Route,Switch} from "react-router-dom"
import React from "react"
import PaysManager from "./containers/PaysManager/PaysManager"
import Navbar from "./components/Navbar/Navbar";
import Unpays from './containers/Unpays'
import Erreur from "./components/Erreur"
import Erreur404 from "./components/Erreur404"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path='/' render={() => <h1 className="text-center">Page d'acceuil</h1>}/>
          <Route  path='/pays' exact component={PaysManager}/>
          <Route exact path='/pays/:id' render={(props) => <Unpays  nomP={props.match.params.id} {...props}/>}/>
          <Route render={() => <Erreur>
              <Erreur404/>
          </Erreur>}/>
        </Switch>
        
    </BrowserRouter>   
  
  );
}

export default App;
