import "./App.css";
import { Route, Routes } from "react-router-dom";
import NewUser from "./pages/NewUser";
import UserTasks from "./pages/UserTasks";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NewUser />} />
      <Route path="/user_tasks" element={<UserTasks />} />
    </Routes>
  );
}

export default App;
