import Navbar from "./components/Navber/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import LoadBirds from "./components/LoadBirds/LoadBirds";
function App() {

  return (
    <div className="App">
      <Navbar />
      <LoadBirds ></LoadBirds>
    </div>
  );
}

export default App;
