import {legacy_createStore} from 'redux'
import rootReducer from './reducers/index'
 const store =legacy_createStore(rootReducer)
 export default store;

//  import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import rootReducer from './reducers/index';
// // import initialStore from './initialStore';

// export default function store() {

	
// 	return createStore(
// 	  rootReducer,
// 	//   initialStore,
// 	  composeWithDevTools(
// 	    applyMiddleware(
// 	      thunk
// 	    )
// 	  )
// 	);
// }