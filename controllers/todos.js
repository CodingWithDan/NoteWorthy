const Todo = require('../models/Todo')

module.exports = {
    getTodos: async (req,res)=>{
        console.log(req.user)
        try{
            
            const todoItems = await Todo.find({userId:req.user.id}).sort({dueDate: 1})
            console.log(todoItems);
            const itemsLeft = await Todo.countDocuments({userId:req.user.id,completed: false})
            const itemsRight = await Todo.countDocuments({userId:req.user.id, completed: true})
            res.render('todos.ejs', {todos: todoItems, left: itemsLeft, right: itemsRight, user: req.user})
            
    

        }catch(err){
            console.log(err)
        }
    },
    createTodo: async (req, res)=>{

        try{
            const dateObj = new Date(req.body.todoDate)
            const day = dateObj.getUTCDate();
            const month = dateObj.getUTCMonth();
            const year = dateObj.getUTCFullYear();
            const UTCDate = new Date(year, month, day).toDateString()

            await Todo.create({ todo: req.body.todoItem, completed: false, userId: req.user.id, dueDate: UTCDate})


            console.log('Todo has been added!')
            res.redirect('/todos')
        }catch(err){
            console.log(err)
        }
    },
    markComplete: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markIncomplete: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    deleteTodo: async (req, res)=>{
        console.log(req.body.todoIdFromJSFile)
        try{
            await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            console.log('Deleted Todo')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    },
}    