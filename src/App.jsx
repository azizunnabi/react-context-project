import Home from "./pages/Home";
import Test from "./pages/Test"
import ShopProvider from "./store/ShopProvider";
function App() {
  return <ShopProvider>
    <Home />
    <Test />
     </ShopProvider>;
}

export default App;
