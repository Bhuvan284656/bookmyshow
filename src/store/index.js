import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import createSagaMiddleware from "redux-saga";

//Register all saga actions 
 function* rootSaga() {
  // yield all([
    
  // ]);
}

// Create saga middleware
const sagaMiddleware = createSagaMiddleware();

//create redux Store
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

// Run saga middleware
store.sagaTask = sagaMiddleware.run(rootSaga);

export default store;