import { NavrBar } from './NavBar/NavBar';
import { Filters } from '../components/Filters/Filters';
import { Rides } from '../components/Rides/Rides';

function App() {
  return (
    
    <div className="App">
      <NavrBar />
      <Filters />
      <Rides />
      <div className='--container'>
          <div className = "footer" >
            <span className='circle'/>
          </div>
      </div>
    </div>
  );
}

export default App;


// menu filter