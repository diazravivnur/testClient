import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { UserContextProvider } from "./contexts/userContext";

import Home from "./components/pages/Home";
import AddFilm from "./components/pages/AddFilm";
import ListFilm from "./components/pages/ListFilm";
import DetailFilm from "./components/pages/DetailFilm";
import Profile from "./components/pages/Profile";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles/global.css";

import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <>
      <UserContextProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home}></Route>

            <Route path="/listfilm" exact component={ListFilm}></Route>
            <Route path="/addfilm" exact component={AddFilm}></Route>
            <Route path="/films/:id" exact component={DetailFilm}></Route>
            <Route path="/profile" exact component={Profile}></Route>
          </Switch>
        </Router>
      </UserContextProvider>
    </>
  );
}

export default App;
