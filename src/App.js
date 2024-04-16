import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Modal from "./Components/Modal/Modal";
import Addwebpage from "./Components/AddWebpage/Addwebpage";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      {/* <Addwebpage /> */}
      <Dashboard />
      {/* <Modal /> */}
    </>
  );
}

export default App;
