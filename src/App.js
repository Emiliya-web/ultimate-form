import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <>
      <Header/>
      <Router>
        <Switch>
          <Route exact path="/" component={Step1}/>
          <Route exact path="/step2" component={Step2}/>
          <Route exact path="/step3" component={Step3}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
