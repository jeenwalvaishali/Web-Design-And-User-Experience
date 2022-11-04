import React from "react";
import { useState } from 'react';
import './Inventory.css';
import { Reorder } from "./Reorder";

function Inventory() {

  const [count, setCount] = useState(2);
  const isDisabled = !count;
 

  const incrementCount = () => {
    setCount(count + 1);
  };
  
  const decrementCount = () =>{
    setCount(count - 1);
  };

  const onReorder = () =>{
    setCount(5);
  }

  return (
        <main>
            <p className="list-header">Order Details</p>
            <div>
            <div className="list-menu">
                <p className="list-menu-name">Name</p>
                <p className="list-menu-increase">Increase</p>
                <p className="list-menu-decrease">Decrease</p>
                <p className="list-menu-count">Count</p>
                <p className="list-menu-reorder">Reorder</p>
            </div>
            <div className="list-item">
                <p className="list-item-name">Sugar</p>
                <button className="button-increase" onClick={incrementCount}><span className="button-icon">&#10133;</span></button>
                <button className="button-decrease" disabled={!count} onClick={decrementCount}><span className="button-icon">&#10134;</span></button>
                <div className="label-count-input">{count}</div>
                <div className="list-item-reorder">
                {isDisabled ? <Reorder clickMe ={onReorder} /> :  <div> </div>}
                </div> 
            </div>
            </div>  
        </main>
      );
}
 
 export default Inventory;