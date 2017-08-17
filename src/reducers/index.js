import { combineReducers } from 'redux';
import HistoryReducer from './history-reducer';
import SearchReducer from './search-reducer';

const rootReducer = combineReducers({
  history: HistoryReducer,
  images: SearchReducer
});

export default rootReducer;