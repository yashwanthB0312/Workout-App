const Workouts = require('../models/workoutModel')
const mongoose = require('mongoose')

// get all workouts
const getWorkouts = async (req,res)=>{
    const workout = await Workouts.find({}).sort({createdAt: -1})
    res.status(200).json(workout)
}

// get a single workout
const getWorkout = async(req,res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"no such workout"})
    }
    const workout = await Workouts.findById(id)
    if(!workout){
        return res.status(404).json({error: "no such workout"})
    }
    res.status(200).json(workout)
}

// add a workout
const postWorkout = async(req,res)=>{
    try {
        const { title, load, reps } = req.body;
        let emptyFields = [];

        if (!title) emptyFields.push('title');
        if (!load) emptyFields.push('load');
        if (!reps) emptyFields.push('reps');

        if (emptyFields.length > 0) {
            return res.status(400).json({ error: 'Please fill in all the fields', emptyFields });
        }

        const workout = await Workouts.create({ title, load, reps });
        res.status(200).json(workout);
    } catch (err) {
        console.error('SERVER ERROR:', err); 
        res.status(500).json({ error: 'Internal Server Error', details: err.message });
    }
}

// delete a workout
const deleteWorkout = async(req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"no such id"})
    }
    const workout = await Workouts.findByIdAndDelete(id)
    if(!workout){
        return res.status(404).json({error: "no such workout"})
    }
    res.status(200).json(workout)
}

// update a workout
const updateWorkout = async(req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"no such id"})
    }
    const workout = await Workouts.findByIdAndUpdate(id,{...req.body},{new:true})
    if(!workout){
        return res.status(404).json({error: "no such workout"})
    }
    res.status(200).json(workout)
}

module.exports = {getWorkouts,getWorkout,postWorkout,deleteWorkout,updateWorkout}