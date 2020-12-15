import React from 'react';
import {NavLink} from "react-router-dom"

const Pays = (props) => {
    return (
        <div className="row no-gutters border m-2">
            <div className="col-4">
                <img src={props.drapeau} alt={props.nom} width="100%" className="p-2"/>
            </div>
            <div className="col">
                <h2>Nom :{props.nomFrancais}</h2>
                <p>Capitale : {props.capitale}</p>
                <p>Région : {props.region}</p>
                <NavLink to={props.match.url+"/"+props.nom} className="nav-link">Afficher plus d'informations</NavLink>
            </div>
        </div>
    );
};

export default Pays;