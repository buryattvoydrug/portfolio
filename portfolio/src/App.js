import Hero from "./pages/Hero";
import './scss/Main.scss'
import './scss/Fonts.scss'
import Contacts from "./pages/Contacts";
function App() {
  return (
    <>
      <div className="global-wrapper">
        <Hero/>
        <Contacts/>
      </div>
    </>
  );
}

export default App;
