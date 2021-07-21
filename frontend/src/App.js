import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import "bootstrap"
import rectangles from './components/rectangles';
import rectangle_list from './components/rectangles-list';
import add_rectangle from '/components/add-rectangles';
function App() {

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
      <a href="/rectangles" classname="navbar-brand">Rectangles</a>
      </nav>
    </div>
  );
}

export default App;
