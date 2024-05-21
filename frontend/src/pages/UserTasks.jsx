import React, { useState } from "react";
import Task from "../components/Task";
import "../components/styles/UserTasks.css";
import CUTask from "../components/CUTask";
import CreateTask from "../components/CreateTask";

function UserTasks() {
  const [selectTask, setSelectTask] = useState([]);

  const [viewTask, setViewTask] = useState(false);

  const handleSelectTask = () => {
    setViewTask(true);
  };

  const closeViewTask = () => {
    setViewTask(false);
  };

  return (
    <div className="page-user-tasks">
      <div className="page-container">
        <div className="a-nv">
          <h1> Bienvenido {localStorage.getItem("username")} </h1>
          <div className="fl-c">
            <p>Filtrar</p>
            <input className="i-n" placeholder="Etiqueta"></input>
            <button className="bt-f">
              <span className="material-icons">search</span>
            </button>
          </div>
          <button className="cr-ss">
            <span className="material-icons">logout</span>
          </button>
        </div>
        {viewTask ? (
          <CUTask
            onClick={closeViewTask}
            title={"Organizar habitacion"}
            label={"Tareas del hogar"}
            description={"Limpiar escritorio, organizar ropa, cambiar sabanas"}
          />
        ) : (
          <div className="at-c">
            <div className="tk-c-n">
              <h3>Crea una nueva tarea</h3>
              <button className="cr-n-tk">
                <span className="material-icons">add</span>
              </button>
            </div>
            <Task
              onClick={handleSelectTask}
              title={"Organizar habitacion"}
              label={"Tareas del hogar"}
              description={
                "Limpiar escritorio, organizar ropa, cambiar sabanas"
              }
            />
            <Task
              onClick={handleSelectTask}
              title={"Estudiar parcial Simulacion"}
              label={"Universidad"}
              description={"Temas: redes neuronales, funciones de activacion"}
            />
            <Task
              onClick={handleSelectTask}
              title={"Ir de compras"}
              label={"Tareas del hogar"}
              description={"Ir al mercado a comprar vegetales y carne"}
            />
            <Task
              onClick={handleSelectTask}
              title={"Enviar informes cliente"}
              label={"Trabajo"}
              description={
                "Enviar correo con informes organizados a el cliente Juan"
              }
            />
          </div>
        )}
        <CreateTask />
      </div>
    </div>
  );
}

export default UserTasks;
