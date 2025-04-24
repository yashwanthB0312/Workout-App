import { WorkoutsContext } from "../context/workoutContext";
import { useContext } from "react";

export const UseWorkoutContext = () =>{
    const context = useContext(WorkoutsContext)
    if(!context){
        throw Error("useworkoutcontext cannot be used in workoutcontextprovider")
    }
    return context
}