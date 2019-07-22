import React from 'react';
import './App.css';
import { connect } from 'react-redux';

const mapStateToProps = (state: any, ownProps: any) => {
  return {};
};

const mapDispatchToProps = (dispatch: Function, ownProps: any) => {
  return {};
};

const PlayerList: React.FC = (props: any) => {
  return (
    <nav className="panel">
      <p className="panel-heading">
        Players
      </p>
      <a className="panel-block is-active">
        bob <small>&nbsp;(you)</small>
      </a>
      <a className="panel-block">
        jill
      </a>
      <a className="panel-block">
        john
      </a>
      <a className="panel-block">
        mack
      </a>
      <a className="panel-block">
        justin
      </a>
      <a className="panel-block">
        margie
      </a>
      <div className="panel-block">
        <button className="button is-dark is-outlined is-fullwidth">
          Join
        </button>
      </div>
    </nav>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlayerList);
