import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideBar from "./components/sidebar";
import Dashboard from "./components/Dashboard";
import AddStudent from "./components/AddStudent";
import AllStudents from "./components/AllStudents";

function App() {
  let data = {
    earnings: "30,000",
    annual: "360000",
    tasks: "20",
    pending: 26,
  };
  return (
    <>
      <Router>
        <div style={{ display: "grid", gridTemplateColumns: "15% 85%" }}>
          <div>
            <SideBar />
          </div>
          <div>
            <Routes>
              <Route path="/dashboard" element={<Dashboard value={data} />} />
              <Route path="/all-students" element={<AllStudents />} />
              <Route path="/add-students" element={<AddStudent />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
