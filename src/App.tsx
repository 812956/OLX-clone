import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import AddProduct from "./pages/AddProduct/Add";

function App() {
  return (

       <Router>

          <Routes>

            <Route path="/" element={<Home/>} />
            <Route path="/add" element={<AddProduct/>} />

          </Routes>
             
       </Router>

      
  );
}

export default App;
