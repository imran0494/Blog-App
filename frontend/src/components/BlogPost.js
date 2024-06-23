import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPostById } from "../services/api";
import ReactMarkdown from "react-markdown";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const getPost = async () => {
      const data = await fetchPostById(id);
      setPost(data);
    };
    getPost();
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="blog-post">
      <img src={post.image} alt={post.title} />
      <h1>{post.title}</h1>
      <p>
        By{" "}
        <a href={post.authorLinkedIn} target="_blank" rel="noopener noreferrer">
          {post.author}
        </a>
      </p>
      <ReactMarkdown>{post.content}</ReactMarkdown>
      <div className="social-share">
        <FacebookShareButton url={window.location.href}>
          <button className="social-btn">Share on Facebook</button>
        </FacebookShareButton>
        <TwitterShareButton url={window.location.href}>
          <button className="social-btn">Share on Twitter</button>
        </TwitterShareButton>
        <LinkedinShareButton url={window.location.href}>
          <button className="social-btn">Share on LinkedIn</button>
        </LinkedinShareButton>
      </div>
    </div>
  );
};

export default BlogPost;
