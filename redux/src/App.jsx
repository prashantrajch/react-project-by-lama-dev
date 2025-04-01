import Leftbar from "./components/leftbar/Leftbar";
import Navbar from "./components/navbar/Navbar";
import Update from "./components/update/Update";
import Rightbar from "./components/rightbar/Rightbar";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Leftbar />
        <Update />
        <Rightbar />
      </div>
    </>
  );
};

export default App;
