import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Task from "../components/Task";
import "../components/styles/UserTasks.css";
import CUTask from "../components/CUTask";
import CreateTask from "../components/CreateTask";
import axios from "axios";

function UserTasks() {
  const navigate = useNavigate();
  const [selectTask, setSelectTask] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [tasksFilter, setTasksFilter] = useState([]);
  const [viewTask, setViewTask] = useState(false);
  const [createTask, setCreateTask] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [filter, setFilter] = useState(false);
  const [searchLabel, setSeachLabel] = useState("");

  useEffect(() => {
    const fetchUserTask = async () => {
      const username = localStorage.getItem("username");
      try {
        const response = await axios.post(
          "http://localhost:8000/all_user_tasks/",
          {
            username: username,
          }
        );
        setTasks(response.data.tasks);
      } catch (error) {
        console.error("Error al obtener las tareas del usuario:", error);
      }
    };
    fetchUserTask();
  }, [refresh]);

  const filterTask = () => {
    const filteredTasks = tasks.filter((task) =>
      task.label.includes(searchLabel)
    );
    setTasksFilter(filteredTasks);
    setFilter(true);
  };

  const handleSelectTask = (task) => {
    setSelectTask(task);
    setViewTask(true);
  };

  const handleSearchLabel = (e) => {
    setSeachLabel(e.target.value);
  };

  const handleCreateTask = () => {
    setCreateTask(true);
  };

  const closeCreateTask = () => {
    setCreateTask(false);
    setRefresh(!refresh);
  };

  const closeViewTask = () => {
    setSelectTask(null);
    setViewTask(false);
  };

  const logout = () => {
    localStorage.setItem("username", undefined);
    navigate("/");
  };

  return (
    <div className="page-user-tasks">
      <div className="page-container">
        <div className="a-nv">
          <h1> Bienvenido {localStorage.getItem("username")} </h1>
          <div className="fl-c">
            <p>Filtrar</p>
            <input
              onChange={handleSearchLabel}
              className="i-n"
              placeholder="Etiqueta"
            ></input>
            <button onClick={filterTask} className="bt-f">
              <span className="material-icons">search</span>
            </button>
          </div>
          <button onClick={logout} className="cr-ss">
            <span className="material-icons">logout</span>
          </button>
        </div>
        {viewTask ? (
          <CUTask
            onClick={closeViewTask}
            title={selectTask.title}
            label={selectTask.label}
            description={selectTask.description}
          />
        ) : createTask ? (
          <CreateTask onClick={() => closeCreateTask()} />
        ) : filter ? (
          <div>
            <h1>Busquedas encontradas con la etiqueta {searchLabel}</h1>
            <div className="at-c">
              {tasksFilter.map((task) => (
                <Task
                  key={task.id}
                  title={task.title}
                  label={task.label}
                  description={task.description}
                  onClick={() => handleSelectTask(task)}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="at-c">
            <div className="tk-c-n">
              <h3>Crea una nueva tarea</h3>
              <button onClick={handleCreateTask} className="cr-n-tk">
                <span className="material-icons">add</span>
              </button>
            </div>
            {tasks.map((task) => (
              <Task
                key={task.id}
                title={task.title}
                label={task.label}
                description={task.description}
                onClick={() => handleSelectTask(task)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default UserTasks;
