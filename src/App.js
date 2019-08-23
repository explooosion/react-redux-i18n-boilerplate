import React, { Component } from 'react';
import './App.scss';

import { HashRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './container/Header';
import Footer from './container/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.dispatch = props.dispatch;
    this.state = {};
  }

  render() {

    return (
      <HashRouter>
        <div id='wrapper' data-locale={this.locale}>
          <Header />
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

App.propTypes = {}

const mapStateToProps = state => {
  return {
    settings: state.settings,
  }
}

export default connect(mapStateToProps)(App);
