import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom';
import  ListEmployeeComponent from './components/ListEmployeeComponent'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import Home from './components/Home';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';


function App() {
  return ( 
    <div>
      <Router>
          <HeaderComponent/>
          <div className="container">
            <Switch> 
              <Route path="/" exact component={ Home}></Route>
              <Route path="/employees"  component={ ListEmployeeComponent}></Route>
              <Route path="/addEmployee"  component={ CreateEmployeeComponent}></Route>
              
            </Switch>
           
          </div>
          <FooterComponent/>
       
        </Router>
    </div>
  );
}

export default App;
