import {Routes, Route} from 'react-router';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Auth from './pages/Auth.jsx';

function App() {
  return (
    <Routes>
      <Route 
        path = "/"
        element = {<Home />} 
      />
      <Route 
        path = "/login" 
        element = {<Login />} 
      />
      <Route 
        path = "/auth" 
        element = {<Auth />} 
      />
    </Routes>
  )
}

export default App; 