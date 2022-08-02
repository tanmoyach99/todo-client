import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskUpdateForm from "./components/TaskUpdateForm";
import Home from "./pages/Home";
import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory();

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/:id">
          <TaskUpdateForm />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
