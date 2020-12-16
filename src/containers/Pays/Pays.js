import React from 'react';
import {NavLink} from "react-router-dom"

const Pays = (props) => {
    let content = "";
    if (!props.solo) {
        content = (
            <NavLink to={"/pays/"+props.nom} className="nav-link">Afficher plus d'informations</NavLink>
        )
    }else{
        content=(
            <div>
                Monnaie : {props.monnaie}
            </div>
        )
    }
    return (
        
             <div className="row no-gutters border m-2">
            <div className="col-4">
                <img src={props.drapeau} alt={props.nom} width="100%" className="p-2"/>
            </div>
            <div className="col">
                <h2>Nom :{props.nomFrancais}</h2>
                <p>Capitale : {props.capitale}</p>
                <p>Région : {props.region}</p>
                {content}
               
                {/* //props.match.url */}
               
               
            </div>
        </div>
       
    );
};

export default Pays;