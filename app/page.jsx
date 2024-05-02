"use client"

import { useState } from "react";
import "./style.css";
export default function Page(){
var [money,updateBrowser]=useState(300);

  function addBlock() {
    money+=400;
    updateBrowser(money);
  }

function subMoney(){
    money-=300;
    updateBrowser(money);
}


    return(
    <main>
        <h1>My Money App</h1>
        <p> My Savings for the year so far</p>
        <h4>NGN {money} </h4>
        <button className="btn-minus" onClick={subMoney}><i className="fa fa-minus"></i> </button>
        <button className="btn-plus"   onClick={addBlock}><i className="fa fa-plus"></i></button>

    </main>

    )
    
}