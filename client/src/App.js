
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./components/views/LandingPage/LandingPage";

import LoginPage from "./components/views/LoginPage/LoginPage";

import RegisterPage from "./components/views/RegisterPage/RegisterPage";

import Auth from "./hoc/auth";


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Auth SpecificComponent={LandingPage} option={null} />}></Route>
          <Route path="/login" element={<Auth SpecificComponent={LoginPage} option={false} />}></Route>
          <Route path="/register" element={<Auth SpecificComponent={RegisterPage} option={false} />}></Route>
        </Routes>
      </div>
    </Router>
  );
}



export default App;