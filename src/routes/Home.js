import React from "react";

const Home = ({ history }) => {
  return (
    <div>
      Home
      <button
        onClick={() => {
          history.push("/posts");
        }}
      >
        포스트보기
      </button>
    </div>
  );
};

export default Home;
