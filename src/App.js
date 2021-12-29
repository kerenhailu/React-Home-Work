import logo from './logo.svg';
import './App.css';
import Routing from './Components/ShowComp.component';
import { BrowserRouter, Link } from 'react-router-dom';
import NavBarComponent from './Components/NavBar.component';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BrowserRouter>
        <Routing/>
        {/* <Link to="/Child">page Child</Link>
      <Link to="/Parent">page Parent</Link>
      <Link to="/KindergartenTeacher ">page KindergartenTeacher </Link> */}
      <NavBarComponent/>
     </BrowserRouter> 
     </header>
      
    </div>
  );
}

export default App;
