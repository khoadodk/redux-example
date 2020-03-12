import React from "react";
import { connect } from "react-redux";

const List = ({ articles }) => (
  <ul>
    {articles.map(el => (
      <li key={el.id}>{el.title}</li>
    ))}
  </ul>
);

const mapStateToProps = state => {
  console.log(state);
  return { articles: state.articles };
};

export default connect(mapStateToProps)(List);
