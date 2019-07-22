import { Reducer } from 'redux';

const random: Reducer = (state = {foo: 1, bar: 2}, action: any) => {
  console.log('int the random reducer');
  return state;
};

export default random;