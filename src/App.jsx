import "./App.css";
// import Footer from "./components/Footer";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services";
import WhereToBuy from "./components/WhereToBuy";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Services />
      <WhereToBuy />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
