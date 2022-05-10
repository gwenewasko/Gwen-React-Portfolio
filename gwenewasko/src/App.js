import Layout from "./components/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/work" element={<Work></Work>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
