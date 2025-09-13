import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaWhatsapp, FaUser, FaCalendarAlt, FaTag } from "react-icons/fa";

const SinglePost = () => {
  const { id } = useParams(); // slug
  const [post, setPost] = useState(null);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  useEffect(() => {
    fetch(
      `https://sangamhospitals.com/blog/wp-json/wp/v2/posts?slug=${id}&_embed`
    )
      .then((res) => res.json())
      .then((data) => setPost(data[0]))
      .catch((err) => console.error("Error fetching post:", err));
  }, [id]);

  if (!post) return <p className="p-6">Loading post...</p>;

  const featuredImage =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    "https://via.placeholder.com/1200x600?text=No+Image";

  const author = post._embedded?.author?.[0];
  const categories = post._embedded?.["wp:term"]?.[0] || [];
  const tags = post._embedded?.["wp:term"]?.[1] || [];

  return (
    <div className="py-36 bg-blue-50">
      <section className="max-w-4xl mx-auto px-6 bg-white shadow-md rounded-lg p-8">
        {/* Featured Image */}
        <motion.img
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          src={featuredImage}
          alt={post.title.rendered}
          className="w-full h-80 object-cover rounded-lg mb-6"
        />

        {/* Title */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-3xl md:text-4xl font-bold text-blue-800 mb-4 text-center"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />

        {/* Author + Date */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="flex items-center justify-center gap-5 mb-6 text-sm text-gray-600"
        >
          <div className="flex items-center gap-2">
            <FaUser className="text-blue-600" />
            <span>{author?.name || "Admin"}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCalendarAlt className="text-blue-600" />
            <span>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
        </motion.div>

        {/* Categories */}
        {categories.length > 0 && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="flex flex-wrap justify-center gap-2 mb-6"
          >
            {categories.map((cat) => (
              <span
                key={cat.id}
                className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full"
              >
                {cat.name}
              </span>
            ))}
          </motion.div>
        )}

        {/* Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="space-y-6 text-gray-700 leading-relaxed prose prose-blue max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />

        {/* Tags */}
        {tags.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag.id}
                className="flex items-center gap-1 bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
              >
                <FaTag className="text-blue-600" /> {tag.name}
              </span>
            ))}
          </div>
        )}

        {/* Share Buttons */}
        <div className="mt-10 text-center">
          <p className="text-gray-600 mb-3">Share this post:</p>
          <div className="flex justify-center gap-6 text-2xl">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              <FaFacebookF />
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${window.location.href}`}
              target="_blank"
              rel="noreferrer"
              className="text-sky-500 hover:text-sky-700"
            >
              <FaTwitter />
            </a>
            <a
              href={`https://wa.me/?text=${window.location.href}`}
              target="_blank"
              rel="noreferrer"
              className="text-green-600 hover:text-green-800"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-gray-500 mt-10 text-sm text-center"
        >
          Published on{" "}
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </motion.div>

        {/* Navigation */}
        <div className="mt-12 flex justify-between text-sm font-medium text-blue-600">
          <Link to="/blog" className="hover:underline">
            ← Back to Blogs
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SinglePost;
