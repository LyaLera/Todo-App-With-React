import { useState } from "react";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faL,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
  const [toDo, setToDo] = useState([
    {
      id: "1",
      title: "Run",
      status: false
    },
    {
      id: "2",
      title: "Sleep",
      status: false
    },
  ]);
  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

  const addTask = () => {};
  const deleteTask = (id) => {};
  const markDone = (id) => {};
  const cancelUpdate = () => {};

  const changeTask = (e) => {};

  const updateTask = () => {};

  return (
    <div className="container">
      <br />
      <h2>To Do List App</h2>
      <br />
      {toDo && toDo.length ? "" : "No Tasks!"}
      {toDo &&
        toDo.map((task, index) => {
          return (
            <React.Fragment key={task.id}>
              <div className="col taskBg">
                <div className={task.status ? "done" : ""}>
                  <span className="taskNumber">{index + 1}</span>
                  <span className="taskText">{task.title}</span>
                </div>
                <div className="iconsWrap">
                  <span>
                    <FontAwesomeIcon icon={faCircleCheck}/>
                  </span>
                  <span>
                  <FontAwesomeIcon icon={faPen}/>
                  </span>
                  <span>
                  <FontAwesomeIcon icon={faTrashCan}/>
                  </span>
                </div>
              </div>
            </React.Fragment>
          );
        })}
    </div>
  );
}

export default App;
