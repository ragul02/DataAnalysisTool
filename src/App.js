
import "./App.css";
import Router from "./routes/routes";
import ResponsiveAppBar from "./appBar/ResponsiveAppBar";

function App() {

  return (
    <>
    <div>
        <ResponsiveAppBar></ResponsiveAppBar>
      </div>
     <Router/>
     </>
  );
}

export default App;
