import {
  ADD_ARTICLE,
  DATA_LOADED,
  USER_LOADED
} from "../constants/action-types";

const initialState = {
  articles: [],
  remoteArticles: [],
  remoteUsers: []
};

// function rootReducer(state = initialState, action) {
//   if (action.type === ADD_ARTICLE) {
//     return Object.assign({}, state, {
//       articles: state.articles.concat(action.payload)
//     });
//   }
//   if (action.type === "DATA_LOADED") {
//     return Object.assign({}, state, {
//       remoteArticles: state.remoteArticles.concat(action.payload)
//     });
//   }
//   return state;
// }

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ARTICLE: {
      return Object.assign({}, state, {
        articles: state.articles.concat(action.payload)
      });
    }
    case DATA_LOADED: {
      return Object.assign({}, state, {
        remoteArticles: state.remoteArticles.concat(action.payload)
      });
    }
    case USER_LOADED: {
      return Object.assign({}, state, {
        remoteUsers: state.remoteUsers.concat(action.payload)
      });
    }

    default:
      return state;
  }
}

export default rootReducer;
