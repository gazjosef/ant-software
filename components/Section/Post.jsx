import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import sanityClient from "../../client";

const Post = () => {
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
      title,
      slug,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
      }
    }`
      )
      .then((data) => setPostData(data))
      .catch(console.error);
  }, []);

  return (
    <main className="post">
      <section className="container | u-mx-auto">
        <h1 className="post__title | u-flex u-justify-center">
          Blog Post Page
        </h1>
        <h2 className="post__title-two | u-flex u-justify-center">
          Welcome to my page of blog posts
        </h2>
        <div>
          <article>
            <Link>
              <span>
                <img src="" alt="" />
                <span>
                  <h3></h3>
                </span>
              </span>
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Post;
