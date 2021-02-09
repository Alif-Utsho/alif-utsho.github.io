import './App.css';

import Submit from './components/submit-page/submit'
import CrushPage from './components/view-page/crush-page'
import { Router } from '@reach/router'
import Footer from './components/footer'

const App = () => {
  return (
    <div>
        <Router>
          <Submit path="propose/" />
        <CrushPage path="propose/:name" />
        
        </Router>
        <Footer/>
    </div>
  );
}

export default App;
