import "../components/styles/CUTask.css";

function CUTask(props) {
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
          <input value={props.title} className="ab-tt" />
          <input value={props.label} className="ab-lt" />
        </div>
        <div className="ab-d-c">
          <p>Descripcion:</p>
          <textarea value={props.description} />
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
