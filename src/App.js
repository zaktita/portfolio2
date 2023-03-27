
import './App.css';
import {About,Footer,Hero,MiniProject,NavBar,Portfolio} from './componenets'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <Portfolio/>
      <MiniProject/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
