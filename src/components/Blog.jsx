import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(
      "https://sangamhospitals.com/blog/wp-json/wp/v2/posts?per_page=20&_embed"
    )
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  return (
    <div className="py-36 bg-blue-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-10 text-center text-blue-800">
        Latest Blog Posts
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
        {posts.length > 0 ? (
          posts.map((post) => {
            const featuredImage =
              post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
              "https://via.placeholder.com/400x250?text=No+Image";

            const author = post._embedded?.author?.[0]?.name || "Admin";
            const date = new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            });

            const categories =
              post._embedded?.["wp:term"]?.[0]?.map((cat) => cat.name) || [];

            return (
              <Link
                to={`/blog/${post.slug}`}
                key={post.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer flex flex-col overflow-hidden"
              >
                {/* Thumbnail */}
                <img
                  src={featuredImage}
                  alt={post.title.rendered}
                  className="w-full h-48 object-cover"
                />

                {/* Content */}
                <div className="p-4 flex flex-col flex-grow">
                  {/* Categories */}
                  {categories.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-2">
                      {categories.map((cat, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Title */}
                  <h2
                    className="text-lg font-semibold text-blue-700 line-clamp-2"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />

                  {/* Excerpt */}
                  <div
                    className="text-gray-600 mt-2 text-sm line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                  />

                  {/* Footer */}
                  <div className="mt-auto flex justify-between items-center pt-4 border-t text-xs text-gray-500">
                    <span>✍ {author}</span>
                    <span>📅 {date}</span>
                  </div>

                  <p className="text-blue-500 mt-3 text-sm font-medium">
                    Read More →
                  </p>
                </div>
              </Link>
            );
          })
        ) : (
          <p className="col-span-full text-center text-gray-600 animate-pulse">
            Loading blog posts...
          </p>
        )}
      </div>
    </div>
  );
};

export default Blog;
