import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./home";
import Navbar from "./navbar/navbar";
import Footer from "./navbar/footer";

function App() {
  return (
    <div className="App">
      <div id="navbar-wrapper">
        <Navbar />
      </div>
      <div id="body-wrapper">
        <Home />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
