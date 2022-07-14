import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <Link to="/">ALL POSTS</Link>
          <h1 className="text-center my-3">Home " MICHAEL "  </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
