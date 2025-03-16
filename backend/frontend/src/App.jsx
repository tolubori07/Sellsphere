/*eslint-no-unused-vars*/
import Header from "./components/Header";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
//import { DevTools } from "jotai-devtools";
import { darkMode } from "./Auth/Atoms";
import { useAtom } from "jotai";
import AddItems from "./pages/AddItems";
import AllItems from './pages/AllItems'
import Notfound from './pages/Notfound'
import ItemView from "./pages/ItemView";
import Cart from "./pages/Cart";
import Dashboard from "./pages/Dashboard";
const App = () => {
  const [darkmode] = useAtom(darkMode);
  const bgMode = darkmode ? "bg-[#141414] text-white" : "bg-bg text-black";
  return (
    <Router>
      {/* <DevTools /> */}
      <div className={`${bgMode}  min-h-screen w-full h-full transition duration-300 ease-in-out pb-5`}>
        <Header />
    <main className="h-full">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/uploaditem" element={<AddItems />} />
          <Route path="/all" element={<AllItems />} />
          <Route path ="/product/:id" element={<ItemView/>}/>
          <Route path="/cart" element={<Cart/>} />
          <Route path="*" element={<Notfound/>} />
           <Route path="/dashboard" element={<Dashboard/>}/> 
        </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
