import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home, List } from "./pages";
import { EqDataProvider } from "./providers";
import "./App.scss";
import { Layout } from "./components";

const App: React.FC = () => {
  return (
    <EqDataProvider>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/list" component={List} />
        </Switch>
      </Layout>
    </EqDataProvider>
  );
};

export default App;
