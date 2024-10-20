import React from "react";
import ItemTQ from "./ItemTQ";
const ChucNangTimKiemTQ=(props)=>{
    return(
        <div>
            <h1>{props.title}</h1>
            <ItemTQ item={props.danhSach} seleted={props.TQ}></ItemTQ>
        </div>
    )
}
export default ChucNangTimKiemTQ;