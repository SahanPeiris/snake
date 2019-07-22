import { combineReducers } from 'redux';
import game from './game-reducer';
import random from '../services/random-reducer';

const rootReducer = combineReducers({
  game: game,
  random:random
});

export default rootReducer;