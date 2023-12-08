import Task from '../models/task.model.js'

async function getTasks (req, res ) {
    try {
        const tasks = await Task.find({ user: req.user.id}).populate('user')
        res.json(tasks)
    } catch (error) {
        return res.status(500).json({ message: "[getTasks] Something went Wrong"})
    }
}

async function getTask (req, res){
    try {
        const task = await Task.findById(req.params.id).populate('user');
        if(!task) return res.status(404).json;
        res.json(task)
    } catch (error) {
        return res.status(404).json({ message: "[getTask] Task Not Found"})
    }
}

async function createTask (req,res){
    try {
        const { title, description , date} = req.body
        const newTask =  new Task({
                title,
                description,
                date,
                user: req.user.id
            })
        const savedTask =   await newTask.save()
        res.json(savedTask);
    } catch (error) {
        return res.status(500).json({ message: "[createTask] Something went Wrong"})
    }
}

async function updateTask (req,res){
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new : true});
        if(!task) return res.status(404).json({message: 'Task not found'});
        res.json(task)
    } catch (error) {
        return res.status(404).json({ message: "[updateTask] Update Task not Found"})
    }
}


async function deleteTask (req, res){
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if(!task) return res.status(404).json({message: 'Task not found'});
        return res.sendStatus(204);
    } catch (error) {
        return res.status(404).json({ message: "[DeleteTask] Task not found"})
    }
}

export {
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}