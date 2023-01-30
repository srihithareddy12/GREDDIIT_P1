import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import NavBar from "./NavBar"
import Profile from "./Profile"
import Home from "./Home"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  if(!window.localStorage.getItem("loginstatus")) window.localStorage.setItem("loginstatus", "false")

  let defaultPath = "/"
  if(window.localStorage.getItem("loginstatus") === "true") defaultPath = "/profile"

  return (
    <>
    <NavBar />
      <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to={defaultPath}/>} />
      </Routes>
  </>
  );
}

export default App;
