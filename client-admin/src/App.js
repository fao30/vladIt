import "./App.css";
import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";

import City from "./pages/cities";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <City />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
