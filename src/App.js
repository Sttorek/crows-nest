import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar'
import Homepage from './Pages/Homepage/Homepage'

function App() {
  return (
    <div className="App">
       {/* <style>{'body { background-color: #141414 }'}</style> */}
     <Navbar />

     <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
    </Router>
    </div>
  );
}

export default App;
