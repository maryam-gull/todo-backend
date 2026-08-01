// External Module
const express = require("express");
const todoItemRouter = express.Router();

// Local Module
const todoItemsController = require("../controllers/todoItemsController");

todoItemRouter.get("/", todoItemsController.getAllTodoItems);
todoItemRouter.post("/", todoItemsController.createTodoItem);
todoItemRouter.delete("/:id", todoItemsController.deleteTodoItem);
todoItemRouter.put("/:id/completed", todoItemsController.markCompleted);



module.exports = todoItemRouter;