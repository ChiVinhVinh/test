import React from "react";
import Item from "./ItemTQ";
const TQ=""
const ChucNangTimKiemTQ=(props)=>{
    return(
        <div>
            <h1>{props.title}</h1>
            <ItemTQ item={props.danhSach} seleted={TQ}></ItemTQ>
        </div>
    )
}
export default ChucNangTimKiemTQ;