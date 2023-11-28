import { BrowserRouter, Route, Routes } from "react-router-dom";
import ViewProducts from "./pages/ViewProducts";
import Home from "./pages/Home";
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/viewproducts" element={<ViewProducts/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
