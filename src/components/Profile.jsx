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
          <div className="container">
            <div className="paragraph-section">
              <form>
                <h4>Initializaion</h4>
                <input type="date" placeholder="init" />

                <h4>Registration</h4>
                <input type="text" placeholder="Full name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Mobile" />

                <h4>Registration</h4>
                <div className="table-view-cell">
                  Item 1
                  <div className="toggle">
                    <div className="toggle-handle"></div>
                  </div>
                </div>

                <button className="btn btn-positive btn-block">Update</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Mom;
