
import { createContext, useState } from "react";
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import Booking from "./components/Booking/Booking";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NoMatch from "./components/NoMatch/NoMatch";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import SignIn from "./components/SignIn/SignIn";
export const UserContext=createContext()
function App() {
   const [loggedInUser, setLoggedInUser] = useState({})
   console.log(loggedInUser);
  return (
<UserContext.Provider value={[loggedInUser, setLoggedInUser,'abe']}>
    <Router>
      <Header/>
      <Switch>
        <Route path='/home'>
          <Home/>
        </Route>
        <Route path='/signin'>
          <SignIn/>
        </Route>
          <PrivateRoute path="/booking/:id">
            <Booking/>
          </PrivateRoute>
          <Route path="/">
            <Home/>
          </Route>
          <Route path='*'>
          <NoMatch/>
        </Route>
        </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
