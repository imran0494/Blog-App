import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPosts } from "../services/api";

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState(6);

  useEffect(() => {
    const getPosts = async () => {
      const data = await fetchPosts();
      setPosts(data);
    };
    getPosts();
  }, []);

  const handleShowMore = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 6);
  };

  return (
    <div className="blog-list">
      {posts.slice(0, visiblePosts).map((post) => (
        <div key={post.id} className="blog-preview">
          <Link to={`/post/${post.id}`}>
            <img src={post.image} alt={post.title} />
            <h2>{post.title}</h2>
            <p>{post.author}</p>
            <p>{post.content.substring(0, 100)}...</p>
            <p>Read more</p>
          </Link>
        </div>
      ))}
      {visiblePosts < posts.length && (
        <button onClick={handleShowMore} className="show-more">
          Show More
        </button>
      )}
    </div>
  );
};

export default BlogList;
