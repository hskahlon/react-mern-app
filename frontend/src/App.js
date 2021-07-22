import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import Rectangles from './components/rectangles';
import Rectangle_list from './components/rectangles-list';
import AddRectangle from './components/add-rectangle';
import DeleteRectangle from './components/delete-rectangle';
function App() {

  return (
    <div>

      {/* Nav Bar */}
      <nav className="navbar navbar-expand navbar-dark bg-dark">
      <a href="/" className="navbar-brand">Home</a>
      <div className="navbar-nav mr-auto">
        <li className="nav-item">
            <Link to={"/rectangle-list"} className="nav-link">
            List all Rectangles
          </Link>
        </li>
          <li className="nav-item">
            <Link to={"/add-rectangle"} className="nav-link">
              Add Rectangle
            </Link>
          </li>
      </div>
      </nav>
      {/* switching routes */}
      <div className="container mt-3">
        <Switch>
          <Route exact path={["/","/rectangle-list"]} component={Rectangle_list}></Route>
          <Route exact path={["/add-rectangle"]} component={AddRectangle}></Route>
          <Route
            path="/rectangles/:id"
            render={(props) => (
              <Rectangles {...props}  />
            )}
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;
