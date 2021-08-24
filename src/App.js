import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";


function App() {
  return (
    <>
    <Particles
    params = {{
      particles:{
        number:{
          value: 50,
          density:{
            enabled: true,
            value_area: 900
          }
        },
        shape:{
          type:"circle",
          stroke:{
            width: 6,
            color:"#00B7FF"
          }
        }
      }
    }}
    />
    <Navbar/>
    <Header/>
    </>
  );
}

export default App;
