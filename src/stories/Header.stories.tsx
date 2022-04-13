import React from "react";
import {Meta,Story} from "@storybook/react";
import Header from "./Header";

const meta:Meta = {
    title:"Header",
    component:Header

}

export default meta;

export const Default = ()=> <Header isAuthenticated={true} login={()=>{}} logout={()=>{}} updateMain={()=>{}}/>
