import React from 'react'
import { UseWorkoutContext } from './../hooks/UseWorkoutContext'
import {toast} from 'react-toastify'

const WorkoutDetails = ({work}) => {

  const {dispatch} = UseWorkoutContext()

  const handleChange = async() =>{
    const response = await fetch('http://localhost:5000/api/workouts/'+work._id,{
      method:'DELETE'
    })
    const json = await response.json()
    if(response.ok){
      dispatch({type:'DELETE_WORKOUT',payload:json})
      toast.success('Successfully Deleted')
    }
  }

  return (
    <div className="workout-details">
        <h4>{work.title}</h4>
        <p><strong>Load (kg):</strong>{work.load}</p>
        <p><strong>Reps :</strong>{work.reps}</p>
        <p>CreatedAt :{work.createdAt}</p>
        <span onClick={handleChange}>Delete</span>
    </div>
  )
}

export default WorkoutDetails
