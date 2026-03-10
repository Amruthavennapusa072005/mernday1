const express=require("express")
const router=express.router()
const {createTask}=require("../controller/TaskController")
router.post("/createTask",createTask)
module.exports=router
