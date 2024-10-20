// Em bi loi sai khong doc duoc file tinh tpjson va quan huyen 
import React from "react";
import { useState } from "react";
import dataT from './tinh_tp.json'
import dataQ from './quan_huyen.json'
import DanhSachCanTim from "./DanhSach/DanhSachCanTim";
const DST=[]
const DSQ=[]
const selectDt=""
const selectGia=""
const T=""
const Q=""

// Lay danh sach Tinh
const laydataTinh=()=>{
    return(
        <pre>{JSON.stringify(dataT,null,2)}</pre>
    )
}
const laydataQuan=()=>{
    return(
        <pre>{JSON.stringify(dataQ,null,2)}</pre>
    )
}
DST=laydataTinh();
DSQ=laydataQuan();
const TimTro=(props)=>{
    const danhSachTro=[...props.dataT]
    const[is,setIs]=useState(false);
    const Onbutton=()=>{
        setIs(true)
    }
 
    const TimMucGia=(ds)=>{
        switch(selectGia){
            case "1": ds.filter((item)=>item.price<1000000)
            case "2": ds.filter((item=>{item.price>1000000})).filter(item=>{item.price<2000000})
            case "3": ds.filter((item=>{item.price>2000000})).filter(item=>{item.price<3000000})
            case "4": ds.filter((item=>{item.price>3000000})).filter(item=>{item.price<5000000})
            case "5": ds.filter((item=>{item.price>5000000})).filter(item=>{item.price<7000000})
            case "6": ds.filter((item=>{item.price>7000000})).filter(item=>{item.price<10000000})
        }
    }

    const TimDienTich=(ds)=>{
        
        switch(selectGia){
            case "1": ds.filter((item)=>item.area<20)
            case "2": ds.filter((item)=>item.area>20).filter(item=>item.area<30)
            case "3": ds.filter((item)=>item.area>30).filter(item=>item.area<50)
            case "4": ds.filter((item)=>item.area>50).filter(item=>item.area<60)
            case "5": ds.filter((item)=>item.area>60).filter(item=>item.area<70)
            case "6": ds.filter((item)=>item.area>70).filter(item=>item.area<80)
        }
    
    }
    const TimT=(ds,T)=>{ return(ds.filter((item)=>{item.code==T}))
    }
    const TimQ=(ds,Q)=>{ return(ds.filter((item)=>{item.code==Q}))
    }
    //lay danh sanh can tim
    const SoluongCanTim=()=>{
      const ds=TimMucGia(danhSachTro)
            ds=TimDienTich(ds)
            ds=TimT(ds,T)
            ds=TimQ(ds,Q)
        return ds;
    }
    return(
        <div>
             <ChucNangTimKiemTQ title="Tinh Thanh" danhsach={DST} TQ={T}></ChucNangTimKiemTQ>
             <ChucNangTimKiemTQ title="Quan Huyen" danhsach={DSH} TQ={Q}></ChucNangTimKiemTQ>
             <ChucNangTimKiemGia selectedGia={selectGia} title="Khoang Gia"></ChucNangTimKiemGia>
             <ChucNangTimKiemDT selectedDT={selectDt} title="Dien Tich"></ChucNangTimKiemDT>
             <button onClick={()=>Onbutton}></button>
            {is?(<DanhSachCanTim item={danhSachTro}></DanhSachCanTim>):( <DanhSachCanTim item={SoluongCanTim}></DanhSachCanTim>)}        
        </div>   
    )
}
export default TimTro;