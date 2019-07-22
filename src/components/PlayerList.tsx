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
    <div className="PlayerList">
      <div>PlayerList Here</div>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlayerList);
