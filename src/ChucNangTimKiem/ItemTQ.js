import React from "react";
import OptionItem from "./OptionItem";
const ItemTQ=(props)=>{
    return (<select value={props.selected} >
        {props.item.map((items=>(<OptionItem code={items.code} name={items.name_with_type}></OptionItem>)))}
    </select>);
}
export default ItemTQ;