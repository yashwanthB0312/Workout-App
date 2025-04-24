const express = require('express')
const {getWorkouts,getWorkout,postWorkout,deleteWorkout,updateWorkout} = require('../controller/workoutController')
const router = express.Router()

router.get('/',getWorkouts)

router.get('/:id',getWorkout)

router.post('/',postWorkout)

router.delete('/:id',deleteWorkout)

router.patch('/:id',updateWorkout)

module.exports = router