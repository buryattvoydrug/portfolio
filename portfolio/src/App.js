import Hero from "./pages/Hero";
import './scss/Main.scss'
import './scss/Bg.scss'
import './scss/Fonts.scss'
import Contacts from "./pages/Contacts";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Widgets from "./components/Widgets";

function App() {
  console.log('rerApp')
  return (
    <>
      
      <div className="global-wrapper">
      
          <div className="ball first__ball"></div>
          <div className="ball second__ball"></div>
          <div className="ball third__ball"></div>
          <div className="ball fourth__ball"></div>
          <Widgets/>

          <div className="container scroll-container">
              <Hero/>
              <About/>
              <Portfolio/>
              <Contacts/>
          </div>
      </div>
    </>
  );
}

export default App;
