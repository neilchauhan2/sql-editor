import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Editor from "./components/editor/Editor";
import Navbar from "./components/layout/Navbar";
const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Editor />
      </div>
    </Router>
  );
};

export default App;
