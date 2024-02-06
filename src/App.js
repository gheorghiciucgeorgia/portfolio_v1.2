import './scss/App.scss';
import MobileMenu from './components/MobileMenu';
import logo from "./assets/logo/light logo.svg"
function App() {
  return (
    <div className="App">
    <header className='header'>
      <div className='header-top'>
        <MobileMenu></MobileMenu>
        <img className="logo" src={logo} alt="logo"/>
      </div>
      <div className='header-contents'>

      </div>
      <div className='header-bottom'>

      </div>
    </header>
    </div>
  );
}

export default App;
