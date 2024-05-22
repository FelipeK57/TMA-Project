import { useState } from "react";
import "../components/styles/CUTask.css";

function CUTask(props) {
  const [title, setTitle] = useState(props.title);
  const [label, setLabel] = useState(props.label);
  const [description, setDescription] = useState(props.description);

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
        <button className="ed-b">Editar</button>
        <button className="de-b">Eliminar</button>
      </div>
    </div>
  );
}

export default CUTask;
