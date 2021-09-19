import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";


function App() {
  return (
    <>
    <Navbar title="TheFormatter" abouttext="About"/>
    <div className="container">
    <TextForm heading="Add text here"/>
    </div>
    </>
  );
}

export default App;
