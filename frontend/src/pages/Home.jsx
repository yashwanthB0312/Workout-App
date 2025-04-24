import React, { useEffect, useState } from 'react'
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'
import { UseWorkoutContext } from '../hooks/UseWorkoutContext'

const Home = () => {
  const {workouts,dispatch } = UseWorkoutContext()
  useEffect(()=>{
    const fetchWorkouts = async () => {
        const response = await fetch('http://localhost:5000/api/workouts')
        const json = await response.json()
        if(response.ok){
          dispatch({type:'SET_WORKOUT',payload:json})          
        }
    }
    fetchWorkouts()
  },[])

  return (
    <div className="home">
      <div className="workout">
        {workouts && workouts.map((work)=>(
          <WorkoutDetails key={work._id} work={work}/>
        ))}
      </div>
      <WorkoutForm/>
    </div>
  )
}

export default Home
