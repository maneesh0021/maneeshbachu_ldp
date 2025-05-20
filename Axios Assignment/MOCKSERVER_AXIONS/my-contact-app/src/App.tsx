import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactPage from "./components/templates/ContactPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default App;
