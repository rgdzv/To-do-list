import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { task } from '../reducers/task';
import { filters } from '../reducers/filters';

const reducers = combineReducers({
  task,
  filters,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(
  applyMiddleware(thunkMiddleware)
));

export default store;