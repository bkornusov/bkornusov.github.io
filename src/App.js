import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./home";
import Navbar from "./navbar/navbar";

function App() {
  return (
    <div className="App">
      <body className="">
        <div className="row">
          <div className="col-sm-3" id="sidebar-wrapper">
            <Navbar />
          </div>
          <div className="col-sm-9" id="body-wrapper">
            <Home />
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
