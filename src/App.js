import Results from './components/AppComponents/search';
import Slider from './components/Slider/slider';
import './styles/index.css'

function App() {
  return (
    <div className="App">
      <Slider/>
      <section className='App-info' >
        <Results/>
      </section>
      <footer>
        <p>Design and code by <a href="https://github.com/DVDLC" target={ '_blank' } >DavidLC.</a></p>
      </footer>
    </div>
  );
}

export default App;
