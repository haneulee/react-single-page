import React from "react";
import { Route, Link } from "react-router-dom";

const Post = ({ match }) => <h2>{match.params.title}</h2>;

const Posts = () => {
  return (
    <div>
      <h1>포스트</h1>
      <Link to="/posts/1">111 </Link>
      <Link to="/posts/2">222 </Link>
      <Link to="/posts/3">333 </Link>
      <Route path="/posts/:title" component={Post} />
    </div>
  );
};

export default Posts;
