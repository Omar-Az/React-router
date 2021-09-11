
import { BrowserRouter, Route,Switch, Redirect } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './Pages/Home'
import About from './Pages/About'
import Profile from './Pages/Profile'
import Notfound from './Pages/Notfound';
import Post from './Pages/Post';
import { useState } from 'react';

function App() {
  const [login, setLogin] = useState(false)
  return (
    <BrowserRouter basename="/Tutorial">
    <div className="App">
    <Header />
    <button onClick={()=>setLogin(!login)}>
      {login ? "logout": "login"}
      </button>
    <Switch>
    <Route path='/' component={Home} exact />
    <Route path='/about' component={About} />
    <Route path='/profile'>
      <Profile login={login} />
    </Route>
    <Route path='/post/:id' component={Post} />
    <Route component={Notfound} />
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
