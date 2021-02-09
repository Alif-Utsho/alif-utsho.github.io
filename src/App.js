import './App.css';

import Submit from './components/submit-page/submit'
import CrushPage from './components/view-page/crush-page'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './components/footer'

const App = () => {
  return (
    <div>
      <Router>
          {/* <Submit to="/" />
          <CrushPage to="/:name" /> */}
          
        <Switch>
          
          <Route exact path="/">
            <Submit/>
          </Route> 
          
          <Route path="/:name">
            <CrushPage/>
          </Route>
        </Switch>  
        
          
      </Router>
      <Footer/>
    </div>
  );
}

// https://alif-utsho.github.io/propose 

export default App;
