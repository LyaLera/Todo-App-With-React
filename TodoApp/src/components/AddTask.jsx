export default function AddTask({ newTask, setNewTask, addTask }) {
  return (
    <>
      <div className="row">
        <div className="col">
          <input
            value={newTask}
            type="text"
            className="form-control form-control-lg"
            onChange={(e) => setNewTask(e.target.value)}
          />
        </div>
        <div className="col-auto">
          <button onClick={addTask} className="btn btn-lg btn-success">
            Add Task
          </button>
        </div>
      </div>
      <br />
    </>
  );
}
