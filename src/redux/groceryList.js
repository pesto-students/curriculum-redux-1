import {combineReducers} from 'redux';
// import actions
import { ADD_ITEM } from './actions';

function addItemReducer(state = [], action) {
  switch(action.type) {
    case ADD_ITEM:
      return [...state, {
        text: action.text,
        completed: false,
      }];
    default:
      return state;
  }
}
const groceryList = combineReducers({
  addItemReducer,
});
export default groceryList;