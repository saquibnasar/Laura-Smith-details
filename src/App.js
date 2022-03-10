import "./App.scss";
import Home from "./component/Home";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Main from "./component/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Email from "./component/Email";
function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <div className="d-flex justify-space-evenly mt-3">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/email">
                <Email />
              </Route>
            </Switch>
          </div>
          <Main />
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
