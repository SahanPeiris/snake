import React from 'react';
import { connect } from 'react-redux';
import { GameService } from '../services/game-service';
import { setGame } from '../actions';


// takes global state and passes it into the component props
const mapStateToProps = (state: any, ownProps: any) => {
  console.log(state);
  return {game: state.game, someOtherProp: 123};
};

// gives access to the dispatch function
const mapDispatchToProps = (dispatch: Function, ownProps: any) => ({
  onClick: async () => {
    const game = await GameService.shared.getGame('QWclaiN1dQwOEbW9OUeF');
    dispatch(setGame(game));
  }
});

type Props = {
  game: any
};

const Board: React.FC = (props: any) => {

  const createTable = () => {

    return (
      <>
        <table className={'table is-bordered'}>
          <tbody>
          {Array(props.game.game.board.height).fill(0).map((elem, idx) => {
            return (
              <tr key={idx}>
                {Array(props.game.game.board.width).fill(0).map((elem, ing) => {
                  return (
                    <td key={ing}>
                      {idx}
                    </td>
                  );
                })}
              </tr>
            );
          })}
          </tbody>
        </table>
      </>
    );
  };

  return props.game && createTable();
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Board);
