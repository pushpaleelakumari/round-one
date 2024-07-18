import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TestLogin from "./pages/TestLogin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TestLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
