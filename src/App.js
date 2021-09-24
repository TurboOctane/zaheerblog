import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import SinglePost from './Pages/SinglePost';
import Error from './Pages/Error';
import Footer from './Components/Footer/Footer';
import { Table } from '@material-ui/core';








function App() {
  return (

    <div className="app">
      <Router>
        <Header />
        <div className="">
        <Switch>

          <Route path='/' exact component={Home} />
          <Route path='/Blog' exact component={Blog} />
          <Route path='/Blog/:slug' exact component={SinglePost} />
          {/* <Route path='/News' exact component={News} /> */}

        </Switch>
        <Footer />
        </div>
      </Router>
  
    </div>

  );
}

export default App;
