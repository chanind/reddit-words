import React from "react";
import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import OctocatCorner from "./components/OctocatCorner";
import IntroPage from "./pages/IntroPage";
import DiffPage from "./pages/DiffPage";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App text-blue-50">
        <OctocatCorner />
        <Router>
          <Switch>
            <Route exact path="/">
              <IntroPage />
            </Route>
            <Route exact path="/diff">
              <DiffPage />
            </Route>
          </Switch>
        </Router>
      </div>
    </QueryClientProvider>
  );
}

export default App;
