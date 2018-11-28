import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

  render() {
    return (
      <div id="blog-header">
        <section className="hero is-info">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Blog Demo
              </h1>
              <h2 className="subtitle is-6">
                Featuring React, Express, GraphQL and MongoDB
              </h2>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Header;