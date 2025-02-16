
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'

import '../node_modules/@syncfusion/ej2-base/styles/material3.css';
import '../node_modules/@syncfusion/ej2-layouts/styles/material3.css';

import ScrollProjeto from './utils/ScrollProjeto';


function App() {

  return (
    <Router>
              <ScrollProjeto />
       <Routes>
          <Route path="/" element={<Home />}></Route>
       </Routes>
    </Router>
  )
}

export default App
