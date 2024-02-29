import './scss/App.scss';
import MobileMenu from './components/MobileMenu';
//import { Route, Routes } from 'react-router-dom';
import logo from "./assets/logo/light logo.svg"
function App() {
  return (
    <div className="App">
{/*       <div>
        <Routes>
        <Route path='/about' element={<About />}></Route>
        </Routes>
      </div> */}
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
