import { FETCH_POSTS, FETCH_POST } from '../actions/index';


const INITIAL_STATE = { all: [], post: null };

export default function( state = INITIAL_STATE, action ) {

  switch (action.type) {

  case FETCH_POST:
    return { ...state, post: action.payload.data }; // get the post instead but mantain the state.

  case FETCH_POSTS:
    return { ...state, all: action.payload.data };  // spread, simply concats

  default:
    return state;   
  }
}