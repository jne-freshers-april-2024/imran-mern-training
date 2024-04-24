import React from "react";

const Childcomponent = (props)=>{
    console.log("child components")
    return (<p>{props.showPara && "New Para is Added"}</p>)
}
export default React.memo(Childcomponent);

