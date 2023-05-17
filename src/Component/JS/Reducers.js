import { DONE_TASK } from "./ActionTypes";

const initialState = {
    ListTasks : [
        {id : Math.random(), text : 'task 1', isDone : false},
        {id : Math.random(), text : 'task 2', isDone : true},
        {id : Math.random(), text : 'task 3', isDone : false}
    ]
}

export const TodoReducer = (state = initialState, {type , payload}) => {
    switch (type) {
        case DONE_TASK :
            return {
                ...state, ListTasks : state.ListTasks.map((el) =>
                el.id === payload ? {...el , isDone : ! el.isDone} : el)
            }
    
        default:
            return state;
    }
}