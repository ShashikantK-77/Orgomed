import {
  BrowserRouter
} from "react-router-dom";
import './App.css';
import './css/style.css';
// import About from "./Component/About";
// import Contact from "./Component/Contact";
// import Home from "./Component/Home";
// import Product from "./Component/Product";
// import Error from "./Component/Error";
import AnimatedRoute from "./Component/AnimatedRoute";

function App() {
  return (
<>

    <BrowserRouter>
    
    <AnimatedRoute/>
 
    </BrowserRouter>
</>
  );
}

export default App;
