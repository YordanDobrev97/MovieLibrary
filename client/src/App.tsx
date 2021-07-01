import Header from './components/Header';
import NavBar from './components/NavBar';
import Heading from './components/Heading';
import './App.css';

function App() {
  return (
    <div>
      <Header>
        <NavBar />
        <Heading heading='Heading' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua' />
      </Header>
    </div>
  );
}

export default App;
