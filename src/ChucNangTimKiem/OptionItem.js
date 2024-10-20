import React from "react";
const OptionItem=(props)=>{
    return (
        <option value={props.code}>{props.name}</option>
    )
}
export default OptionItem