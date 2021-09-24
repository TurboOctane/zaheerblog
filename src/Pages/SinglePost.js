import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import client from "../client";
import { SanityClient } from "@sanity/client";
import BlockContent from "@sanity/block-content-to-react";
import { Card } from '@material-ui/core';

import '../Style/SinglePost.css';
import '../Style/Blog.css';

export default function SinglePost() {

  const [singlePost, setSinglePost] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { slug } = useParams()
  const [author, setAuthor] = useState([])

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"] {
        title,
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
      .then((data) => setSinglePost(data[0]))
    setIsLoading(false)
  }, [slug])



  return (
    // <> {isLoading ? (
    //     <h1>
    //         Loading...
    //     </h1>
    // ) : (
    //     <section>
    //         <h1>
    //             {singlePost.title}
    //         </h1>
    //         {singlePost.mainImage && singlePost.mainImage.asset && (
    //             <img
    //                 src={singlePost.mainImage.asset.url}
    //                 alt={singlePost.title}
    //                 title={singlePost.title}
    //             />
    //         )}

    //         <p>{singlePost.authorName}</p>

    //         <div className="block__content">
    //             <BlockContent
    //                 blocks={singlePost.body}
    //                 projectId="1a8rzkrj"
    //                 dataset="production"
    //             />
    //         </div>

    //         <button>
    //             <Link to="/blog">
    //                 Read more articles
    //             </Link>
    //         </button>
    //     </section>
    // )}
    // </>

    <div className='blog__page'>
      <div className="fullBlogs">
        <div className="singleBlog">
          <h1>
            {singlePost.title}
          </h1>
          <h3 className="sourceName">
            <span>By {singlePost.authorName}</span>
          </h3>
          {singlePost.mainImage && singlePost.mainImage.asset && (
            <img
              src={singlePost.mainImage.asset.url}
              alt={singlePost.title}
              title={singlePost.title}
            />
          )}
          <div className="block__content">
            <BlockContent
              blocks={singlePost.body}
              projectId="1a8rzkrj"
              dataset="production"
            />
            <button className='btnSingle'>
                 <Link to="/blog">
                     Read more articles
                 </Link>
            </button>
          </div>
        </div>
      </div>
    </div>

  )
}
