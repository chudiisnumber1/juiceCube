import React from "react";
import { Route } from "react-router-dom";
import { getAllPosts } from "../api";
import { useEffect, useState } from "react";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const result = await getAllPosts();
      setPosts(result);
    };
    getPosts();
  });
  return (
    <div>
      {posts.map((post) => {
        return (
          <div className="post-container" key={`all Post:${post._id}`}>
            <h1>{post.author.name}</h1>
            <h1>{post.id}</h1>
            <h2>{post.title}</h2>
            <h3>{post.content}</h3>
            <h3>{post.active}</h3>
            <h3>{post.tags}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
