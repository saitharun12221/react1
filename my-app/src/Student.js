import React from "react";
function Greeting(prop){
    return(
        <>
        <h1>Name:{prop.name}</h1>
        <h2>Age:{prop.age}</h2>
        </>
    );
}; 
export default Greeting