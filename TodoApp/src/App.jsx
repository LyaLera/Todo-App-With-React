import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import UpdateTask from "./components/UpdateTask";
import ToDo from "./components/ToDo";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [toDo, setToDo] = useState(() => {
    let savedTasks = JSON.parse(localStorage.getItem("todos"))
    return savedTasks || ""
  });
  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

  useEffect(() => {
    let ignore = false
    const setToDoTasks = () => {
      if(!ignore) {
        localStorage.setItem("todos", JSON.stringify(toDo))
      }
    }
    setToDoTasks()
      return () => {
        ignore = true
      }
  }, [toDo])

  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = {
        id: num,
        title: newTask,
        status: false,
      };
      setToDo([...toDo, newEntry]);
      setNewTask("");
    }
  };
  const deleteTask = (id) => {
    let newTasks = toDo.filter((task) => task.id !== id);
    setToDo(newTasks);
  };
  const markDone = (id) => {
    let newTask = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setToDo(newTask);
  };
  const cancelUpdate = () => {
    setUpdateData("");
  };

  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    };
    setUpdateData(newEntry);
  };

  const updateTask = () => {
    let filterRecords = [...toDo].filter((task) => task.id !== updateData.id);
    let upddatedObject = [...filterRecords, updateData];
    setToDo(upddatedObject);
    setUpdateData("");
  };

  return (
    <div className="container">
      <br />
      <h2>To Do List App</h2>
      <br />

      {updateData ? (
        <UpdateTask
          updateData={updateData}
          updateTask={updateTask}
          changeTask={changeTask}
          cancelUpdate={cancelUpdate}
        />
      ) : (
        <AddTask newTask={newTask} setNewTask={setNewTask} addTask={addTask} />
      )}

      {toDo && toDo.length ? "" : "No Tasks!"}
      <ToDo toDo={toDo} markDone={markDone} setUpdateData={setUpdateData} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
