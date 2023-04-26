import logo from './logo.svg';
import './App.css';

import FirstComponent from './components/learning-examples/FirstComponent'
import SecondComponent from './components/learning-examples/SecondComponent'
import ThirdComponent from './components/learning-examples/ThirdComponent'
import FourthComponent from './components/learning-examples/FourthComponent'
function App() {
  return (
    <div className="App">
      My todo Application
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      <ThirdComponent/>
      <FourthComponent/>
    </div>
  );
}




export default App;
