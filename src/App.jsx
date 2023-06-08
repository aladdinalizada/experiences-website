import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Plan from "./components/Plan";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Offers />
      <Plan />
    </div>
  );
}

export default App;
