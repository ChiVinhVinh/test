import React from "react";
import Item from "./ItemTQ";
const value="";
const ChucNangTimKiemDT=(props)=>{
    return(
        <div>
            <h1>{props.title}</h1>
            {/* lay du lieu con len cha */}
            <select value={props.selectedDT}>
            <option value="1">Duoi 20 m2</option>
            <option value="2">20 m2-30 m2</option>
            <option value="3">30 m2- 50 m2</option>
            <option value="4">50 -60 m2</option> 
            <option value="5">60 -70 m2</option>
            <option value="6">70 - 80 m2</option>
            </select>
        </div>
    )
}
export default ChucNangTimKiemDT;