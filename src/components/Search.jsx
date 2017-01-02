/**
 * similac mom
 * Tw
 */

import React from 'react';

class Mom extends React.Component {

  componentDidMount() {
  }

  render() {
    return (
      <section className="main-content main-content--secondary">
        <div className="main-content__scroller">
          <div className="container container--pure">
            <div className="paragraph-section">
              <ul className="table-view">
                <li className="table-view-cell">
                  <a className="navigate-right">
                    Item 1
                  </a>
                </li>
                <li className="table-view-cell">
                  <a className="navigate-right">
                    Item 2
                  </a>
                </li>
                <li className="table-view-cell">
                  <a className="navigate-right">
                    Item 3
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Mom;
