import React from "react";
import BlogList from "../components/BlogList";

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Blog Posts</h1>
      <BlogList />
    </div>
  );
};

export default HomePage;
