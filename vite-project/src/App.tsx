import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Layout from "./components/Layout";

function App() {

  return (
    <>
      <BrowserRouter basename="/" >
        <Routes>
            <Route path="" element={<Home />}></Route>
            <Route path="layout" element={<Layout/>}></Route>
            <Route path="/dashboard" element={<div>Dashboard</div>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
