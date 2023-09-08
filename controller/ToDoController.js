const ToDoModel = require('../models/ToDoModel')

module.exports.getToDo =  async(req,res)=>{
    const todo = await ToDoModel.find() 
    res.send(todo)
}

module.exports.saveToDo = (req,res)=>{
    const {text} = req.body; 
 
    ToDoModel.create({text})
    .then((data)=>{
     console.log('added successfully')
     res.send(data)
    }).catch((err)=>{
     console.log(err)
    })
 
 }

 module.exports.updateToDo =  (req,res)=>{
    const {_id , text} = req.body;

    ToDoModel.findByIdAndUpdate(_id , {text})
    .then(()=>{
        res.send('updated successfully')
       }).catch((err)=>{
        console.log(err)
       })
}

module.exports.deleteToDo =  (req,res)=>{
    const {_id } = req.body;

    ToDoModel.findByIdAndDelete(_id )
    .then(()=>{
        res.send('deleted successfully')
       }).catch((err)=>{
        console.log(err)
       })
}