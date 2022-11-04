import React, { Component } from 'react';
import './Inventory.css';

export function Reorder(props){
 
   function clickMe() {
        props.clickMe();
    }
    
    return(
        <button onClick={() => clickMe()} className="button-reorder">Reorder</button>
    );
}
