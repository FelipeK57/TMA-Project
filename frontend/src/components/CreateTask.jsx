import "../components/styles/CUTask.css";

function CreateTask(props) {
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
          <input value={props.title} placeholder="Titulo" className="ab-tt" />
          <input value={props.label} placeholder="Etiqueta" className="ab-lt" />
        </div>
        <div className="ab-d-c">
          <p>Descripcion:</p>
          <textarea
            placeholder="Escribe una descripcion"
            value={props.description}
          />
        </div>
      </div>
      <div className="c-bt-ab-tk">
        <button className="ed-b">Guardar</button>
      </div>
    </div>
  );
}

export default CreateTask;
