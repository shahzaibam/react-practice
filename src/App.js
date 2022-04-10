import Content from './Components/Content';
import Header from './Components/Header';
import actividades from './Components/actividades';

function App() {
  return (
    <div>
    <Header />
    <Content activities={actividades}/>
    
    </div>
  );
}

export default App;
