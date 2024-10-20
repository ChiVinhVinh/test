import React from "react";
import DanhSachItem from "./DanhSachItem";
const DanhSachCanTim=()=>{
    if(props.items.length>0)
        return <h1>Khong tim thay</h1>
    return (
        <ul>
            {props.items.map((item)=>(<DanhSachItem title={item.title} thumbnail={item.thumbnail} price={item.price} area={item.area} city={item.city} district={item.district}
            content={item.content}></DanhSachItem>))}
        </ul>
    )
}
export default DanhSachCanTim