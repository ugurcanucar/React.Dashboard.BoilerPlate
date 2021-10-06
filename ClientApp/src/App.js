import "./App.css";
import Views from "./views";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" component={Views} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
