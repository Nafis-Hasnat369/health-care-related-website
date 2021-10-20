// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import AuthProvider from './contexts/AuthProvider';
import Services from './components/Services/Services';
import About from './components/About/About';
import Login from './components/Login/Login';
import PageNotFound from './components/404/PageNotFound';
import Register from './components/Register/Register';
import Details from './components/Details/Details';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
            <PrivateRoute path="/details/:id">
              <Details />
            </PrivateRoute>
            <PrivateRoute path="/about">
              <About />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
