const Task=require("../models/Task")
exports.createTask=async(requestAnimationFrame,res)=>{
    try{
        const task=await Task.creater({
            title:requestAnimationFrame.body.title,
            description:requestAnimationFrame.body.description,
            status:requestAnimationFrame.body.status,
        })
        res.send(201).json({msg:"task creates"}.task)

    }catch(error){
        console.log(error)
    }
}