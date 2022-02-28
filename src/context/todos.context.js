import React, {createContext} from 'react';
import { useLocalStorageReducer } from '../hooks/useLocalStorageReducer';
import todoReducer from "../reducers/todo.reducer"

const defaultTodos = [
    {id: 1, task: "Watch 3 video for web development daily", completed: true},
    {id: 2, task: "Read 20 pages of the book", completed: false}
]
export const TodosContext = createContext ();
export const DispatchContext = createContext();


export function TodosProvider(props){
    const [todos, dispatch] = useLocalStorageReducer("todos", defaultTodos, todoReducer)
    return (
        <TodosContext.Provider value={todos}>
            <DispatchContext.Provider value={dispatch}>
             {props.children}
            </DispatchContext.Provider>
        </TodosContext.Provider>
    )
}
