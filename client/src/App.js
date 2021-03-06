import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import MenuBar from './components/MenuBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import {Container} from 'semantic-ui-react';
function App() {
  return (
    <Router>
      <h1>Social Media</h1>
      <Container>
        <MenuBar color="blue"/>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Container>
      

    </Router>
  );
}

export default App;
