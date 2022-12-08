import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Nav from "./components/Nav";
import ShopProvider from "./store/ShopProvider";
import Details from "./pages/Details";
function App() {
  return <ShopProvider>
    <Router>
      <Nav />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product/:id' element={<Details />} />
      </Routes>
    </Router>
     </ShopProvider>;
}

export default App;
