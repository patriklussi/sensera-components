import React from "react";
import {Meta,Story} from "@storybook/react";
import Header from "../components/root/Header/Header";

const meta:Meta = {
    title:"Header",
    component:Header

}

export default meta;

export const Default = ()=> <Header  updateMain={()=>{}}/>
