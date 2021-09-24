import React from "react";
import { Avatar, Card } from "@material-ui/core";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import client from '../client';
import '../Style/Blog.css';
import Footer from "../Components/Footer/Footer";



export default function Blog() {

  const [posts, setPosts] = useState([]);

  //GROQ (Graph-Relational Object Queries) 
  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] {
        title,
        slug,
        body,
        "authorName" : author -> name,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        }
      }`
      )
      .then((data) => setPosts(data))
      .catch(console.error)
  }, [])

  return (
    <div className='blog__page'>
      <div className="blog__page__header">
        {posts.length}Blogs Results...
      </div>
      <div className="blogs">
        {posts.map((post) => (
          <article key={post.slug.current}>
            <div className="blog">
              <img src={post.mainImage.asset.url} alt="" />
              <h3 className="sourceName">
                <span>By {post.authorName}</span>
              </h3>
              <h1><Link to={`/blog/${post.slug.current}`} >{post.title}</Link></h1> 
              <button className='btn'>
                <Link
                  to={`/blog/${post.slug.current}`}
                >
                  Read Article  &nbsp;<i class="fas fa-arrow-right"></i>
                </Link>
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

