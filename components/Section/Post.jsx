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
        <div className="post__grid | u-auto-columns u-gap-2">
          {postData &&
            postData.map((post, index) => {
              <article>
                <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                  <span
                    key={index}
                    className="u-block u-h-64 u-rounded u-shadow | u-relative | u-leading-snug"
                  >
                    <Image
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className="post__grid-image | u-absolute"
                    />
                    <span className="u-block u-relative u-h-full u-pb-1 u-pr-1 | u-flex u-justify-items-end u-items-end ">
                      <h3>{post.title}</h3>
                    </span>
                  </span>
                </Link>
              </article>;
            })}
        </div>
      </section>
    </main>
  );
};

export default Post;
