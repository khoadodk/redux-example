export function addArticle(payload) {
  return { type: "ADD_ARTICLE", payload };
}
// redux thunk
export function getData() {
  return function(dispatch) {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "DATA_LOADED", payload: json });
      });
  };
}
// redux saga
export function callData() {
  return { type: "DATA_REQUESTED" };
}
