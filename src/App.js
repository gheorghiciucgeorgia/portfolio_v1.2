import './scss/App.scss';
import MobileMenu from './components/MobileMenu';
function App() {
  return (
    <div className="App">
    <header className='header'>
      <div className='header-top'>
        <MobileMenu></MobileMenu>
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
