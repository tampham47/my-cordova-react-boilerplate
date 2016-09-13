/**
 *
 */

import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {

  render() {
    return (
      <div id="main-section">
        <header className="bar bar-nav">
          <a className="icon icon-info pull-right"></a>
          <h1 className="title">Similac Mom</h1>
        </header>

        {this.props.children}

        <nav className="bar bar-tab">
          <Link to="/baby" className="tab-item active">
            <span className="icon icon-home"></span>
            <span className="tab-label">baby</span>
          </Link>
          <Link to="/mom" className="tab-item">
            <span className="icon icon-person"></span>
            <span className="tab-label">mom</span>
          </Link>
          <a className="tab-item" href="#">
            <span className="icon icon-star-filled"></span>
            <span className="tab-label">todo</span>
          </a>
          <a className="tab-item" href="#">
            <span className="icon icon-search"></span>
            <span className="tab-label">plus</span>
          </a>
          <a className="tab-item" href="#">
            <span className="icon icon-gear"></span>
            <span className="tab-label">kick</span>
          </a>
        </nav>
      </div>
    );
  }
}

export default App;
