// Em bi loi sai khong doc duoc file tinh tpjson va quan huyen 
import React from "react";
import { useState } from "react";
const fs = require('fs');
var DST=[]
var DSQ=[]
const selectDt=""
const selectGia=""
// Lay danh sach Tinh
fs.readFile('tinh_tp.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Lỗi khi đọc file:', err);
        return;
    }

    try {
        // Chuyển đổi chuỗi JSON thành mảng
        DST = JSON.parse(data);

        // Kiểm tra kết quả
        console.log(mang);
    } catch (parseErr) {
        console.error('Lỗi khi phân tích JSON:', parseErr);
    }
});
//Lay danh sach Quan
const fs2 = require('fs2');
fs2.readFile('quan_huyen.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Lỗi khi đọc file:', err);
        return;
    }

    try {
        // Chuyển đổi chuỗi JSON thành mảng
        DSQ = JSON.parse(data);

        // Kiểm tra kết quả
        console.log(mang);
    } catch (parseErr) {
        console.error('Lỗi khi phân tích JSON:', parseErr);
    }
});
const TimTro=(props)=>{
    const[is,setIs]=useState(false);
    const Onbutton=()=>{
        setIs(true)
    }
    const TimMucGia=(gia,a)=>{
        switch(selectGia){
            case "1": if(gia<1000000) 
            case "2": if(gia>1000000&&gia<2000000)
            case "3": if(gia>2000000&&gia<3000000)
            case "4": if(gia>3000000&&gia<5000000)
            case "5": if(gia>5000000&&gia<7000000)
            case "6": if(gia>7000000&&gia<10000000)
        }
    }
    const TimDienTich=(dt,a)=>{
        switch(selectGia){
            case "1": if(dt<20) 
            case "2": if(dt>20&&dt<30)
            case "3": if(dt>30&&dt<50)
            case "4": if(dt>50&&dt<60)
            case "5": if(dt>60&&dt<70)
            case "6": if(dt>70&&dt<80)
        }
    }
    //lay danh sanh can tim
    const SoluongCanTim=()=>{props.dST.filter((item)=>{
    })

    }
    return(
        <div>
             <ChucNangTimKiemTQ title="Tinh Thanh" danhsach={DST}></ChucNangTimKiemTQ>
             <ChucNangTimKiemTQ title="Quan Huyen" danhsach={DSH}></ChucNangTimKiemTQ>
             <ChucNangTimKiemGia selectedGia={selectGia} title="Khoang Gia"></ChucNangTimKiemGia>
             <ChucNangTimKiemDT selectedDT={selectDt} title="Dien Tich"></ChucNangTimKiemDT>
             <button onClick={Onbutton}></button>
             <DanhSachCanTim item={SoluongCanTim}></DanhSachCanTim>

        </div>
       
    )
}
export default TimTro;