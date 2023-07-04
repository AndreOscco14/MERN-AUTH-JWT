import mongoose from 'mongoose'

const tasksSchema = new mongoose.Schema({
    title:{ type: String , required: true},
    description: {type: String, required: true},
    date: {type: Date, default: Date.now}, 
}, {
    timestamps: true
})

export default mongoose.model('Task', tasksSchema)