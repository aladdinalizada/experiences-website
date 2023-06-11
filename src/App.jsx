import { Helmet } from "react-helmet";
import "./App.css";
import Hero from "./components/Hero";
import ImageSlider from "./components/ImageSlider";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Plan from "./components/Plan";
import Rooms from "./components/Rooms";

function App() {
  return (
    <div>
      <Helmet>
        <title>Travel Agency</title>
        <meta name="description" content="Travel Agency" />
        <meta property="og:title" content="Travel Agency" />
      </Helmet>
      <Navbar />
      <Hero />
      <Offers />
      <Plan />
      <Rooms />
      <ImageSlider />
    </div>
  );
}

export default App;
