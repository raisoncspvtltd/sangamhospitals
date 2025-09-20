import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://sangamhospitals.com/myblogs/wp-json/wp/v2/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  if (posts.length === 0) {
    return <p className="p-6">Loading blogs...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Our Blogs</h1>
      {posts.map((post) => (
        <div key={post.id} className="p-4 border-b">
          <Link to={`/blog/${post.slug}`} className="text-xl font-semibold text-blue-600 hover:underline">
  {post.title.rendered}
</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
