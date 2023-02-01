import './App.css';
import NavBar from './components/NavBar';
import './style/content.css';
import Trending from './components/Trending';
import Superhero from './components/Superhero';
import Intro from './components/Intro';

function App() {
  return (
    <div>
      {/* section */}
      <div className="myBg">
        <NavBar />
        <Intro />
      </div>
      {/* end */}

      {/* trending */}
      <div className='trending'>
        <Trending />
      </div>
      {/* end */}

      {/* superhero */}
      <div className='superhero'>
        <Superhero />
      </div>
      {/* end */}
    </div>
  );
}

export default App;
