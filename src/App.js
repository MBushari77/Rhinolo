import './static/bootstrap.css';
import './App.css';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <center>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/' component={ Home } />
          </Switch>
        </Router>
      </center>
    </div>
  );
}

export default App;
