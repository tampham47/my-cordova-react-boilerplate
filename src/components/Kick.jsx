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
      <section className="main-content">
        <div className="main-content__scroller">
          <div className="container container--pure">
            <div className="paragraph-section">
              <ul className="table-view">
                <li className="table-view-cell table-view-cell--kick">Item 1</li>
                <li className="table-view-cell table-view-cell--kick">Item 2</li>
                <li className="table-view-cell table-view-cell--kick">Item 3</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Mom;
