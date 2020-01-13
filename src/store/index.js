import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import createSagaMiddleware from "redux-saga";

 function* rootSaga() {
  // yield all([
    
  // ]);
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

store.sagaTask = sagaMiddleware.run(rootSaga);

export default store;