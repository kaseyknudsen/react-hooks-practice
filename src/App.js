import "./App.css";
import UseRef from "./components/UseRef";
import UseRef2 from "./components/UseRef2";
import UseRef3 from "./components/UseRef3";
import UseEffect from "./components/UseEffect";
import UseEffect2 from "./components/UseEffect2";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="useRef1" element={<UseRef />} />
        <Route path="useRef2" element={<UseRef2 />} />
        <Route path="useRef3" element={<UseRef3 />} />
        <Route path="useEffect" element={<UseEffect />} />
        <Route path="useEffect2" element={<UseEffect2 />} />
      </Routes>
    </div>
  );
}

export default App;
