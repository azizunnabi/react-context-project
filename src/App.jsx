import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Nav from "./components/Nav";
import ShopProvider from "./store/ShopProvider";
function App() {
  return <ShopProvider>
    <Router>
      <Nav />
      <Routes>
      <Route path='/' element={<Home />} />
      </Routes>
    </Router>
     </ShopProvider>;
}

export default App;
