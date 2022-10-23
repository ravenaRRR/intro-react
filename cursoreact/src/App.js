import './App.css';
import FirstComponent from './components/FirstComponent';
import AnotherComponent from './components/AnotherComponent';
import Images from './components/Images';
import Hooks from './components/Hooks';
import List from './components/List';
import RenderCond from './components/RenderCond';
import Fragments from './components/Fragments';
import Container from './components/Container';


function App() {

    return (
         <div className = "App" >
      <h2>Hello world!</h2>
      <FirstComponent/>
  <AnotherComponent/>
  <Images/>
  <Hooks/>
  <List/>
  <RenderCond X = {8} Y ={10} />
  <Fragments />
  <Container> 
    <h1>Este é o filho do container </h1>
    </Container>
        </div>
    );
}

export default App;