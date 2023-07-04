import Task from '../models/task.model.js'

async function getTasks (req, res ) {
 const tasks = await Task.find({ user: req.user.id}).populate('user')
 res.json(tasks)
}

async function getTask (req, res){
    const task = await Task.findById(req.params.id).populate('user');
    if(!task) return res.status(404).json;
    res.json(task)
}

async function createTask (req,res){
    const { title, description , date} = req.body
   const newTask =  new Task({
        title,
        description,
        date,
        user: req.user.id
    })
  const savedTask =   await newTask.save()
  res.json(savedTask);
}

async function updateTask (req,res){
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new : true});

    if(!task) return res.status(404).json({message: 'Task not found'});
    res.json(task)
}


async function deleteTask (req, res){
    const task = await Task.findByIdAndDelete(req.params.id);
    if(!task) return res.status(404).json({message: 'Task not found'});
    return res.sendStatus(204);
}

export {
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}