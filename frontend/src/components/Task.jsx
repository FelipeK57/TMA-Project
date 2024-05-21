import "./styles/Task.css";

function Task(props) {
  return (
    <div onClick={props.onClick} className="tk-c">
      <div className="h-c">
        <h3 className="tt">{props.title}</h3>
        <h3 className="lt">{props.label}</h3>
      </div>
      <div className="d-c">
        <p>Descripcion:</p>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Task;
