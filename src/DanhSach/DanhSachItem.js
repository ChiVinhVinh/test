// em ko biet cach lay danh sach tinh tp va quan huyen de truy van o day
import React from "react";
const DanhSachItem = (props)=>{
    return (<li>
        <h1>{props.title}</h1>
        <h2>{props.price}/Thang</h2>
        <h2>Khu vuc</h2>
        <p>{props.content}</p>
    </li>)
}
export default DanhSachItem;