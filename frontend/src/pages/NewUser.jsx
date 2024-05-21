import { useState } from "react";
import "../components/styles/NewUser.css";
import { Link, useNavigate } from "react-router-dom";

function NewUser() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const startButton = (e) => {
    localStorage.setItem("username", username);
    navigate("/user_tasks");
  };

  return (
    <div className="page-container">
      <div className="n-c">
        <h2>Ingresa un nombre de usuario</h2>
        <div className="f-c">
          <input className="i-n" type="text" onChange={handleChangeUsername} />
          <Link to="/user_tasks">
            <button onClick={startButton}>Continuar</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NewUser;
