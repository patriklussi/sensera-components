import React from 'react';

class RootModel {
    userName: string;
    courses: Course[];
    chat: Chat[];
    messages: Messages[];
    notifyMessages: NotifyMessages[];
    todo: Todo[]

    constructor(userName: string, studentCourses: Course[], chat: Chat[], messages: Messages[], notifyMessages: NotifyMessages[], todo: Todo[]) {
        this.userName = userName;
        this.courses = studentCourses;
        this.chat = chat;
        this.messages = messages;
        this.notifyMessages = notifyMessages;
        this.todo = todo;
    }
}

class Course {
    id: string;
    name: string;
    events: number;
    units: Unit[];

    constructor(id: string, name: string, events: number, units: Unit[]) {
        this.id = id;
        this.name = name;
        this.events = events;
        this.units = units;
    }
}

class Unit {
    id: string;
    name: string;
    icon: string;
    studentAssignment: StudentAssignment[];

    constructor(id: string, name: string, icon: string, studentAssignment: StudentAssignment[]) {
        this.id = id;
        this.name = name;
        this.icon = icon;
        this.studentAssignment = studentAssignment;
    }
}

class StudentAssignment {
    id: string;
    name: string;
    assignmentId: string;
    events: number;
    img: string;
    description: string;

    constructor(id: string, name: string, assignmentId: string, events: number, img: string, description: string) {
        this.id = id;
        this.name = name;
        this.assignmentId = assignmentId;
        this.events = events;
        this.img = img;
        this.description = description;
    }
}

class Chat {
    id: string;
    writer: string;
    chatMessage: string;

    constructor(id: string, writer: string, chatMessage: string) {
        this.id = id;
        this.writer = writer;
        this.chatMessage = chatMessage;
    }
}

class Messages {
    id: string;
    title: string;
    content: string;

    constructor(id: string, title: string, content: string) {
        this.id = id;
        this.title = title;
        this.content = content;
    }
}

class NotifyMessages {
    id: string;
    date: string;
    time: string
    title: string;
    description: string;
    author: string;

    constructor(id: string, date: string, time: string, title: string, description: string, author: string) {
        this.id = id;
        this.date = date;
        this.time = time;
        this.title = title;
        this.description = description;
        this.author = author;
    }
}

class Todo {
    id: number;
    title: string;
    checked: boolean;

    constructor(id: number, title: string, checked: boolean) {
        this.id = id;
        this.title = title;
        this.checked = checked;
    }
}

export {
    RootModel,
    Course,
    StudentAssignment,
    Unit,
    Chat,
    Messages,
    NotifyMessages,
    Todo
};
