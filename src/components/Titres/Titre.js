import React from 'react';

const Titre = (props) => {

    return (
        <h1 
        className="border border-dark bg-primary p-2 m-2 rounded text-center text-white"
        style={{fontFamily: 'Boogaloo'}}
        >
           {props.children} 
        </h1>
    );
};

export default Titre;