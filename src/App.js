import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Shop from "./components/Navbar/Shop";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Shop />
      </div>
    </>
  );
}

export default App;
