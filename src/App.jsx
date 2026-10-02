import { Routes,Route } from "react-router-dom";
import Home from "./pages/home";
import Psp from './pages/psp'
function App(){
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/Psp' element={<Psp />}/>
    </Routes>
  );
}
export default App;