import React from "react";
import Item from "./ItemTQ";
const ChucNangTimKiem=(props)=>{
    return(
        <div>
            <h1>{props.title}</h1>
            <Item chon={props.danhSach}></Item>
        </div>
    )
}
export default ChucNangTimKiem;