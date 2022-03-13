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
    </div>
  );
}

export default App;
