import './App.css';
import { Link, Switch, Route, BrowserRouter } from "react-router-dom";
import {Text} from "./Components/Text"
function App() {
  return (
    <BrowserRouter>
      <header>
        <p>Pregnancy Medical</p>
        <nav>
        <Link to="/">HOME</Link>
        <Link to="/doctors">OUR DOCTORS</Link>
      </nav>
      </header>
      <Switch>
        <Route path="/" exact component={Text}/>  
        <Route path="/doctors" exact component={Text}/>  
      </Switch>      
    </BrowserRouter>
  );
}

export default App;
