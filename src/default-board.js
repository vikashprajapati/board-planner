import { uuid } from "./utilities/utils.js";

export default {
    name: "workshop",
    columns: [
        {
            name: "todo",
            tasks: [
                {
                    description: "",
                    name: "first task",
                    id: uuid(),
                    userAssigned: null
                },
                {
                    description: "hello",
                    name: "second task",
                    id: uuid(),
                    userAssigned: null
                }
            ]
        },
        {
            name: "in progress",
            tasks: [
                {
                    description: "",
                    name: "coding task",
                    id: uuid(),
                    userAssigned: null
                },
                {
                    description: "hello",
                    name: "problem solving task",
                    id: uuid(),
                    userAssigned: null
                }
            ]
        },
        {
            name: "Done todos",
            tasks: [
                {
                    description: "",
                    name: "sleep task",
                    id: uuid(),
                    userAssigned: null
                },
                {
                    description: "hello",
                    name: "problem solving task",
                    id: uuid(),
                    userAssigned: null
                }
            ]
        },
        {
            name: "dummy todos",
            tasks: [
                {
                    description: "",
                    name: "sleep task",
                    id: uuid(),
                    userAssigned: null
                },
                {
                    description: "hello",
                    name: "problem solving task",
                    id: uuid(),
                    userAssigned: null
                }
            ]
        }
    ]
};
