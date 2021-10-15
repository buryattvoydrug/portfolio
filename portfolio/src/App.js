import Hero from "./pages/Hero";
import './scss/Main.scss'
import './scss/Bg.scss'
import './scss/Fonts.scss'
import Contacts from "./pages/Contacts";
import Nav from "./components/Nav";
import Portfolio from "./pages/Portfolio";

function App() {

  return (
    <>
      <div className="global-wrapper">
        <Nav/>
        <div className="to-scroll">
          <div className="container">
            <span className="to-scroll__text title">листайте вниз</span>
          </div>
        </div>
        {/* <div className="ball first__ball"></div>
          <div className="ball second__ball"></div>
          <div className="ball third__ball"></div>
          <div className="ball fourth__ball"></div> */}
        <div className="container scroll-container">
            <Hero/>
            <Portfolio/>
            <Contacts/>
        </div>
      </div>
    </>
  );
}

export default App;
