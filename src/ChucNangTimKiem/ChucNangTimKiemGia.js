import React from "react";
import Item from "./ItemTQ";
//lay lua chon 
const value="";
const ChucNangTimKiemGia=(props)=>{
    return(
        <div>
            <h1>{props.title}</h1>
            {/* Lay du lieu tu con len cha */}
            <select value={props.selectedGia}>
            <option value="1">Duoi 1 trieu</option>
            <option value="2">1 trieu - 2 trieu</option>
            <option value="3">2 trieu - 3 trieu</option>
            <option value="4">3 trieu- 5 trieu</option> 
            <option value="5">5 trieu -7 trieu</option>
            <option value="6">7 trieu -10 trieu</option>
        </select>
        </div>
    )
}
export default ChucNangTimKiemGia;