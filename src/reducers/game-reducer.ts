import { Reducer } from 'redux';

const game: Reducer = (state = null, action: any) => {
  switch (action.type) {
    case 'SET_GAME':
      console.log('in reducres');
      console.log(state);
      return {
        ...state,
        game: action.game
      };
    default:
      return state;
  }
};

export default game;