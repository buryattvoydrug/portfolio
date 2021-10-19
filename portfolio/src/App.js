import Hero from "./pages/Hero";
import './scss/Main.scss'
import './scss/Bg.scss'
import './scss/Fonts.scss'
import Contacts from "./pages/Contacts";
import Nav from "./components/Nav";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

function App() {
  const [show, setShow] = useState(true)
  const [show2, setShow2] = useState(true)
  var item = document.querySelector('.contacts-page');
  var portfolio = document.querySelector('.portfolio-list');
  let clientHeight=document.documentElement.clientHeight
  const [scroll, setScroll] = useState(0);
  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    if(item && item.getBoundingClientRect().bottom-clientHeight<100){
      setShow(false)
    }
    if(item && item.getBoundingClientRect().bottom-clientHeight>=100){
      setShow(true)
    }
    if(portfolio && portfolio.getBoundingClientRect().top<=300){
      setShow2(false)
    }
    if(portfolio && (portfolio.getBoundingClientRect().top>300) ){
      setShow2(true)
    }
    if(portfolio && (portfolio.getBoundingClientRect().bottom<0) ){
      setShow2(true)
    }
  })
  return (
    <>
      
      <div className="global-wrapper">
      <CSSTransition
                  in={show2}
                  timeout={1000}
                  classNames="popup"
                  unmountOnExit>
          <Nav/>
        </CSSTransition>
        <CSSTransition
                  in={show}
                  timeout={1000}
                  classNames="popup"
                  unmountOnExit>
          <div className="to-scroll">
            <div className="container">
              <span className="to-scroll__text title">листайте вниз</span>
            </div>
          </div>
        </CSSTransition>
        <div className="ball first__ball"></div>
          <div className="ball second__ball"></div>
          <div className="ball third__ball"></div>
          <div className="ball fourth__ball"></div>
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
