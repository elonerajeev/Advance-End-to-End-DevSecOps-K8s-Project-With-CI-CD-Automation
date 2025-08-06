// import { Component } from "react";
// import {
//     addTask,
//     getTasks,
//     updateTask,
//     deleteTask,
// } from "./services/taskServices";

// class Tasks extends Component {
//     state = { tasks: [], currentTask: "" };

//     async componentDidMount() {
//         try {
//             const { data } = await getTasks();
//             this.setState({ tasks: data });
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     handleChange = ({ currentTarget: input }) => {
//         this.setState({ currentTask: input.value });
//     };

//     handleSubmit = async (e) => {
//         e.preventDefault();
//         const originalTasks = this.state.tasks;
//         try {
//             const { data } = await addTask({ task: this.state.currentTask });
//             const tasks = originalTasks;
//             tasks.push(data);
//             this.setState({ tasks, currentTask: "" });
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     handleUpdate = async (currentTask) => {
//         const originalTasks = this.state.tasks;
//         try {
//             const tasks = [...originalTasks];
//             const index = tasks.findIndex((task) => task._id === currentTask);
//             tasks[index] = { ...tasks[index] };
//             tasks[index].completed = !tasks[index].completed;
//             this.setState({ tasks });
//             await updateTask(currentTask, {
//                 completed: tasks[index].completed,
//             });
//         } catch (error) {
//             this.setState({ tasks: originalTasks });
//             console.log(error);
//         }
//     };

//     handleDelete = async (currentTask) => {
//         const originalTasks = this.state.tasks;
//         try {
//             const tasks = originalTasks.filter(
//                 (task) => task._id !== currentTask
//             );
//             this.setState({ tasks });
//             await deleteTask(currentTask);
//         } catch (error) {
//             this.setState({ tasks: originalTasks });
//             console.log(error);
//         }
//     };
// }

// export default Tasks;

import React, { Component } from "react";
import {
  addTask,
  getTasks,
  updateTask,
  deleteTask,
} from "./services/taskServices";

class Tasks extends Component {
  state = { tasks: [], currentTask: "" };

  async componentDidMount() {
    try {
      const { data } = await getTasks();
      this.setState({ tasks: data });
    } catch (error) {
      console.log(error);
    }
  }

  handleChange = ({ currentTarget: input }) => {
    this.setState({ currentTask: input.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const originalTasks = this.state.tasks;
    try {
      const { data } = await addTask({ task: this.state.currentTask });
      const tasks = [...originalTasks, data];
      this.setState({ tasks, currentTask: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleUpdate = async (id) => {
    const originalTasks = this.state.tasks;
    try {
      const tasks = [...originalTasks];
      const index = tasks.findIndex((task) => task._id === id);
      tasks[index] = { ...tasks[index], completed: !tasks[index].completed };
      this.setState({ tasks });
      await updateTask(id, { completed: tasks[index].completed });
    } catch (error) {
      this.setState({ tasks: originalTasks });
      console.log(error);
    }
  };

  handleDelete = async (id) => {
    const originalTasks = this.state.tasks;
    try {
      const tasks = originalTasks.filter((task) => task._id !== id);
      this.setState({ tasks });
      await deleteTask(id);
    } catch (error) {
      this.setState({ tasks: originalTasks });
      console.log(error);
    }
  };

  render() {
    return (
      <div className="container">
        <h1>DevSecOps Task Manager</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.currentTask}
            onChange={this.handleChange}
            placeholder="Enter a task"
            className="form-control mb-3"
          />
          <button className="btn btn-primary" type="submit">
            Add Task
          </button>
        </form>

        <ul className="list-group mt-4">
          {this.state.tasks.map((task) => (
            <li
              key={task._id}
              className={`list-group-item d-flex justify-content-between align-items-center ${
                task.completed ? "list-group-item-success" : ""
              }`}
            >
              <span
                onClick={() => this.handleUpdate(task._id)}
                style={{
                  cursor: "pointer",
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                {task.task}
              </span>
              <button
                onClick={() => this.handleDelete(task._id)}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Tasks;
