import { TWEETS_LOADED } from '../actions/tweets';
// import { ADD_TODO, DELETE_TODO } from '../actions/actionTypes';
// import {repo} from 'birdcage-data-mock';

// const initialState = [
//   {
//     title: 'Use React & Redux',
//     completed: false,
//     id: 0
//   }
// ];
// const initialState = repo.getTweets();
const initialState = [];

export default function todos(state = initialState, action) {
  switch (action.type) {

    case TWEETS_LOADED:
      return action.tweets;

    // case ADD_TODO:
    //   return [
    //     {
    //       id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
    //       completed: false,
    //       title: action.title
    //     },
    //     ...state
    //   ];
    //
    // case DELETE_TODO:
    //   return state.filter(todo =>
    //     todo.id !== action.todo.id
    //   );

    default:
      return state;
  }
}
