import Content from './Components/Content';
import Header from './Components/Header';
import actividades from './Components/actividades';
import Clock from './Components/Clock';

function App() {
  return (
    <div>
    <Header />
    <Content activities={actividades}/>
    <Clock/>
    
    </div>
  );
}

export default App;
