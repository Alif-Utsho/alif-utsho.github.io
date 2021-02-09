import './App.css';

import Submit from './components/submit-page/submit'
import CrushPage from './components/view-page/crush-page'
import { Redirect, Router } from '@reach/router'
import Footer from './components/footer'

const App = () => {
  return (
    <div>
        <Router>
          <Submit path="/" />
          <CrushPage path="/:name" />
        </Router>
        <Footer/>
    </div>
  );
}

// https://alif-utsho.github.io/propose

export default App;
