import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Page1 from "./components/page1";
import Page2 from "./components/page2";
import { Navbar } from "reactstrap";

function App() {
    return (
        
      <>
        <Router>
          <Routes>
            <Route exact path="/" element={<Page1 />} />
            <Route path="studybuddy" element={<Page2 />} />
          </Routes>
        </Router>
      </>
    );
}

export default App;