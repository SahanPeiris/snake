import React from 'react';
import logo from '../logo.svg';
import './App.css';
import { connect } from 'react-redux';
import Board from './Board';
import PlayerList from './PlayerList';


// takes global state and passes it into the component props
const mapStateToProps = (state: any, ownProps: any) => {
  return {};
};

// gives access to the dispatch function
const mapDispatchToProps = (dispatch: Function, ownProps: any) => {
  return {};
};

const App: React.FC = (props: any) => {
  console.log(props);

  return (
    <div className="section">
      <div className="columns  is-centered">
        <div className="column is-10">
          <Board />
        </div>
        <div className="column">
          <PlayerList />
        </div>
      </div>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
