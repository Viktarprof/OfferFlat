import './App.css';
import Contacts from './components/Contacts/Contacts';
import Information from './components/Information/Information';
import Map from './components/Map/Map';
import SliderContainer from './components/SliderContainer/SliderContainer';
import TopInfo from './components/TopInfo/TopInfo';

function App() {
  return (
    <div className='container'>
     <div className='offerWindow'>
      <SliderContainer/>
      <TopInfo/>
     </div>
    
     <Information/>
     <Contacts/>
     <Map/>
  
    </div>
  );
}

export default App;
