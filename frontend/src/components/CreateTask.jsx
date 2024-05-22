import axios from "axios";
import "../components/styles/CUTask.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateTask(props) {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [label, setLabel] = useState("");
  const [description, setDescription] = useState("");

  const create = async () => {
    try {
      const response = await axios.post("http://localhost:8000/create_task/", {
        username: localStorage.getItem("username"),
        title: title,
        label: label,
        description: description,
      });
      alert("Tarea creada correctamente");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="c-v-tk">
      <div className="c-h-ab">
        <h1>Crear una tarea</h1>
        <button onClick={props.onClick}>
          <span className="material-icons">close</span>
        </button>
      </div>
      <div className="ab-tk-c">
        <div className="ab-h-c">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Titulo"
            className="ab-tt"
          />
          <input
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            placeholder="Etiqueta"
            className="ab-lt"
          />
        </div>
        <div className="ab-d-c">
          <p>Descripcion:</p>
          <textarea
            placeholder="Escribe una descripcion"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>
      <div className="c-bt-ab-tk">
        <button onClick={create} className="ed-b">
          Guardar
        </button>
      </div>
    </div>
  );
}

export default CreateTask;
