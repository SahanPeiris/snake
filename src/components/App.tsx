import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Board from './Board';
import PlayerList from './PlayerList';
import Navbar from './Navbar';
import Logo from '../logo.svg';
import styled from 'styled-components';

const mapStateToProps = (state: any, ownProps: any) => {
  return {};
};

const mapDispatchToProps = (dispatch: Function, ownProps: any) => {
  return {};
};

const IntroSection = styled.div`
  padding-top: 0.5em;
  padding-bottom: 0.5em;
`;

const App: React.FC = () => {
  return (
    <>
      <Navbar/>

      <IntroSection className="section has-text-centered">
        <img src={Logo} width="112" height="28" alt={'logo'}/>
        <p>
          Use the arrow keys to move your player.
        </p>
        <p>
          Find the prize and don't get eaten by the snake.
        </p>
      </IntroSection>

      <div className="section">
        <div className="columns is-centered is-wrapped is-multiline">
          <div className="column is-9">
            <Board/>
          </div>
          <div className="column is-3">
            <PlayerList/>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
