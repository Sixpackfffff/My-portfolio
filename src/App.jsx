import Title from "./components/Title";
import Profile from "./components/Profile"
import Service from "./components/Service"
import Works from "./components/Works"
import Footer from "./components/Footer";
import './index.css'

function App() {
  return (
    <div className="all">
     <Title /> 
     <Profile />
     <Service />
     <Works />
     <Footer />
    </div>
  );
}

export default App;
