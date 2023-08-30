import Dashboard from "./pages/Dashboard/Dashboard";
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
