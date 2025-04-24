import React, { useState } from 'react'
import { UseWorkoutContext } from '../hooks/UseWorkoutContext'
import { toast } from 'react-toastify'


const WorkoutForm = () => {
    const [title,setTitle] = useState('')
    const [load,setLoad] = useState('')
    const [reps,setReps] = useState('')
    const [error,setError] = useState(null)
    const {dispatch} = UseWorkoutContext()
    const [emptyField,setEmptyField] = useState([])

    const handleSubmit = async(e) =>{
        e.preventDefault()

        const workout = {title,load,reps}
    
        if (!title || !load || !reps) {
            setError('Please fill in all fields');
            setEmptyField(['title', 'load', 'reps'].filter(field => !workout[field]));
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/workouts', {
                method: 'POST',
                body: JSON.stringify(workout),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const json = await response.json();

            if (!response.ok) {
                setError(json.error);
                setEmptyField(json.emptyFields || []); 
            }

            if (response.ok) {
                setTitle('');
                setLoad('');
                setReps('');
                setError(null);
                setEmptyField([]);
                toast.success('Workout Added')
                dispatch({ type: 'CREATE_WORKOUT', payload: json });
            }
        } catch (err) {
            console.error('Failed to submit workout:', err);
            setError('Failed to submit workout. Please try again later.');
        }
    }
    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new Workout</h3>

            <label>Exercise Title:</label>
            <input type='text' onChange={(e)=>setTitle(e.target.value)} value={title} className={emptyField.includes('title') ? 'error':''}/>
            <label>Load (in kg):</label>
            <input type='number' onChange={(e)=>setLoad(e.target.value)} value={load} className={emptyField.includes('load') ? 'error':''}/>
            <label>Reps:</label>
            <input type='number' onChange={(e)=>setReps(e.target.value)} value={reps} className={emptyField.includes('reps') ? 'error':''}/>
            <button>Add Workout</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default WorkoutForm
