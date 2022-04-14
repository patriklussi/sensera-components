import React, {createContext, useEffect, useState} from 'react';
import {useKeycloak} from "@react-keycloak/web";
import {RootModel, StudentAssignment, Unit} from "./RootModel";

export const RootModelContext = createContext<RootModel>({} as RootModel);

type Props = {
    children: JSX.Element,
};

const tmpMockData = {
    userName: "tmp",
    courses: [],
    chat: [{id: "1", writer: "writer1", chatMessage: "Hello"}, {id: "2", writer: "writer2", chatMessage: "Hello"}],
    messages: [{id: "1", title: "messageTitle1", content: "MessageContent1"}, {id: "2", title: "messageTitle2", content: "MessageContent3"},],
    notifyMessages:
        [
            {id: "1", date: "2022-02-24", time: "09:00 - 12:00", title: "Meeting", description: "Description - Lorem Ipsum is simply dummy text of the printing and typesetting industry. ", author: "John Doe"},
            {id: "2", date: "2022-02-22", time: "10:00 - 12:00", title: "Meeting", description: "Description - Lorem Ipsum is simply dummy text of the printing and typesetting industry. ", author: "John Doe"},
            {id: "3", date: "2022-02-19", time: "11:00 - 12:00", title: "Meeting", description: "Description - Lorem Ipsum is simply dummy text of the printing and typesetting industry. ", author: "John Doe"},
            {id: "4", date: "2022-02-02", time: "12:00 - 12:00", title: "Meeting", description: "Description - Lorem Ipsum is simply dummy text of the printing and typesetting industry. ", author: "John Doe"},
            {id: "5", date: "2022-02-28", time: "13:00 - 12:00", title: "Meeting", description: "Description - Lorem Ipsum is simply dummy text of the printing and typesetting industry. ", author: "John Doe"},
            {id: "6", date: "2022-02-28", time: "14:00 - 12:00", title: "Meeting", description: "Description - Lorem Ipsum is simply dummy text of the printing and typesetting industry. ", author: "John Doe"},
            {id: "7", date: "2022-02-02", time: "15:00 - 12:00", title: "Meeting", description: "Description - Lorem Ipsum is simply dummy text of the printing and typesetting industry.", author: "John Doe"},
        ],
    todo: [{id: 1, title: "todo1", checked: false}]
}

const blankData = {
    userName: "",
    courses: [{id: "", name: "", events: 1, units: [{id: "", name: "", icon: "", studentAssignment: [{id: "",name: "",assignmentId: "",events: 1,img: "",description: ""}]}]}],
    chat: [{id: "", writer: "", chatMessage: ""}],
    messages: [{id: "", title: "", content: ""}],
    notifyMessages: [{id: "", date: "", time: "", title: "", description: "", author: ""}],
    todo: [{id: 1, title: "", checked: false}]
}

export const RootModelProvider = ({children}: Props) => {
    const [rootData, setRootData] = useState<RootModel>(tmpMockData)




    if (!rootData) return null
    return (
        <RootModelContext.Provider value={rootData}>
            {children}
        </RootModelContext.Provider>
    )
}
