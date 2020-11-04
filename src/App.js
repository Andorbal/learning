import { Route, Switch, Users } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import "./App.css";
import Math from "./math/Math";

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Learning!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/math">Math</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route path="/math">
          <Math />
        </Route>
        <Route path="/">
          <div>Choose a subject</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
