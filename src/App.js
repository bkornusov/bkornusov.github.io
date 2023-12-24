import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./home";
import Navbar from "./navbar/navbar";
import Footer from "./navbar/footer";

function App() {
  return (
    <div className="App">
      <body className="">
        <div className="">
          <div className="d-block" id="navbar-wrapper">
            <Navbar />
          </div>
          <div className="d-block" id="body-wrapper">
            <Home />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
