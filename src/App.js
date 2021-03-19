
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import Booking from "./components/Booking/Booking";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Result from "./components/Result/Result";
function App() {
  return (
    <Router>
      <Header/>
      <Switch>
          <Route path="/booking/:id">
            <Booking/>
          </Route>
          <Route path="/result/:id">
            <Result/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
