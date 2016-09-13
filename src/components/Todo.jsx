/**
 * similac mom
 * Tw
 */

import React from 'react';

class Baby extends React.Component {

  componentDidMount() {
  }

  render() {
    return (
      <section className="main-content main-content--secondary">
        <div className="main-content__scroller">
          <div className="container container--pure">
            <header className="bar bar-nav bar-nav--secondary">
              <button className="btn btn-link btn-nav pull-left">
                <span className="icon icon-left-nav"></span>
              </button>
              <button className="btn btn-link btn-nav pull-right">
                <span className="icon icon-right-nav"></span>
              </button>
              <h1 className="title">Week 34: 05/02 - 05/09</h1>
            </header>

            <div className="paragraph-section">

              <ul className="table-view">
                <li className="table-view-cell table-view-cell--todo">
                  <span className="icon icon-check"></span> Item 1
                </li>
                <li className="table-view-cell table-view-cell--todo">
                  <span className="icon icon-check"></span> Item 2
                </li>
                <li className="table-view-cell table-view-cell--todo">
                  <span className="icon icon-check"></span> Item 3
                </li>
                <li className="table-view-cell table-view-cell--todo">
                  <span className="icon icon-check"></span> Item 4
                </li>
                <li className="table-view-cell table-view-cell--todo">
                  <span className="icon icon-check"></span> Free-market engine construct bicycle bridge courier
                </li>
                <li className="table-view-cell table-view-cell--todo">
                  <span className="icon icon-check"></span> Free-market engine construct bicycle bridge courier
                </li>
                <li className="table-view-cell table-view-cell--todo">
                  <span className="icon icon-check"></span> Free-market engine construct bicycle bridge courier
                </li>
                <li className="table-view-cell table-view-cell--todo">
                  <span className="icon icon-check"></span> Free-market engine construct bicycle bridge courier
                </li>
                <li className="table-view-cell table-view-cell--todo">
                  <span className="icon icon-check"></span> Free-market engine construct bicycle bridge courier
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Baby;
