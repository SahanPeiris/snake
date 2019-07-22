import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import { GameService } from './services/game-service';
import { setGame } from './actions';

export const store = createStore(rootReducer);


//TODO:: move initialization code somewhere else
(async () => {
  const game = await GameService.shared.getGame('QWclaiN1dQwOEbW9OUeF');
  store.dispatch(setGame(game));
})();

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
