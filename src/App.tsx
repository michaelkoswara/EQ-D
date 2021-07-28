import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Home, List } from './pages';
import { EqDataProvider } from './providers';
import './App.scss';
import { Layout } from './components';

const App:React.FC = () => {
  return (
    <EqDataProvider>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/EQ-D" component={Home}/>
            <Route exact path="/EQD/list" component={List}/>
          </Switch>
        </Layout>
      </Router> 
    </EqDataProvider>
  );
}

export default App;
