import { useState } from "react";
import "../components/styles/CUTask.css";
import axios from "axios";

function CUTask(props) {
  const [title, setTitle] = useState(props.title);
  const [label, setLabel] = useState(props.label);
  const [description, setDescription] = useState(props.description);

  const updateTask = async () => {
    try {
      const response = await axios.put("http://localhost:8000/update_task/", {
        username: localStorage.getItem("username"),
        title: props.title,
        label: props.label,
        description: props.description,
        new_title: title,
        new_label: label,
        new_description: description,
      });
      alert("Tarea actualizada correctamente");
    } catch (error) {
      alert("ERROR DE EL SERVIDOR");
    }
  };

  const deleteTask = async () => {
    try {
      const response = await axios.request({
        method: "delete",
        url: "http://localhost:8000/delete_task/",
        data: {
          username: localStorage.getItem("username"),
          title: props.title,
          label: props.label,
          description: props.description,
        },
      });
      alert("Tarea eliminada correctamente");
    } catch (error) {
      alert("ERROR DE EL SERVIDOR");
    }
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleLabel = (e) => {
    setLabel(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div className="c-v-tk">
      <div className="c-h-ab">
        <h1>Visualizacion de tarea</h1>
        <button onClick={props.onClick}>
          <span className="material-icons">close</span>
        </button>
      </div>
      <div className="ab-tk-c">
        <div className="ab-h-c">
          <input onChange={handleTitle} value={title} className="ab-tt" />
          <input onChange={handleLabel} value={label} className="ab-lt" />
        </div>
        <div className="ab-d-c">
          <p>Descripcion:</p>
          <textarea onChange={handleDescription} value={description} />
        </div>
      </div>
      <div className="c-bt-ab-tk">
        <button onClick={updateTask} className="ed-b">
          Editar
        </button>
        <button onClick={deleteTask} className="de-b">
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default CUTask;
