import { createContext, useReducer } from "react"

export const WorkoutsContext = createContext()

export const WorkoutReducer = (state,action) => {
    switch(action.type){
        case 'SET_WORKOUT':
            return {workouts : action.payload}
        case 'CREATE_WORKOUT':
            return {workouts : [action.payload,...state.workouts]}
        case 'DELETE_WORKOUT':
            return {workouts : state.workouts.filter((w)=>w._id!==action.payload._id)}
        default:
            return state
    } 
}


export const WorkoutContextProvider = ({ children }) => {
    const [state,dispatch] = useReducer(WorkoutReducer,{workouts:null})
    return (
        <WorkoutsContext.Provider value={{...state,dispatch}}>
            {children}
        </WorkoutsContext.Provider>
    )
}