import { ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK } from "./ActionTypes"

export const Add_Task =() => {
    return {type : ADD_TASK}
}

export const Done_Task =() => {
    return {type : DONE_TASK}
}

export const Edit_Task =() => {
    return {type : EDIT_TASK}
}

export const Delete_Task =() => {
    return {type : DELETE_TASK}
}