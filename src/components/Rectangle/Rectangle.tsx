import React from "react"

export interface RectangleProps {
label:string,
}

const Rectangle= (props:RectangleProps) =>{
    return <article>{props.label}</article>

    
}