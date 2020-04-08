import React, { Component, useState } from 'react';
//import fire from '../configure/Fire';
import App from '../App';
import { render } from 'react-dom';
import Test from '../Test';
import { Route, Router } from 'react-router-dom';
import { CommentDiscussion } from '@primer/octicons-react';
import Demo01 from './Demo01';
class Home extends React.Component {
  state = {
    renderfunction: false,
  };
  some = () => {
    console.log('pressed');
    this.setState({ renderFunction: true });
  };
  render() {
    return (
      <div>
        <h1>Welcome to Interactive Cares</h1>
        <button onClick={this.some} type="button" className="btn">
          Live Session
        </button>
        {this.state.renderFunction && <Demo01 />}
      </div>
    );
  }
}
export default Home;
