"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Cardss from "components/Cards/Cardss";
import Blog from "@/types/Blog";
type Props = {};

const CategoryPage = (props: Props) => {
  const searchQuery = useSearchParams();
  const params = useSearchParams();
  const search = params.get("category");
  const [blogs, setBlogs] = useState<Blog[]>([]);
  console.log(search);

  const fetchBlogs = async (q: string) => {
    fetch(`/api/category?category=${q}&page=1`)
      .then((res) => res.json())
      .then((data) => setBlogs(data.blogs));
  };

  useEffect(() => {
    const goToTop = () => {
      window.scrollTo({
        top: 400,
        behavior: "smooth",
      });
    };
    goToTop();
    if (search) {
      fetchBlogs(search);
    }
  }, []);

  const onSearch = (query: string) => {
    console.log(query);

    if (query && query.length > 0) {
      fetchBlogs(query);
    }
  };
  return (
    <div className="max-w-[1420px] mx-auto p-4 py-12 space-y-5 dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              {search} Blogs
            </h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Welcome to the search result page of our blogging website, where you can easily find relevant blog posts based on your keywords or query.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {blogs &&
              blogs.map((blog, id) => {
                return <Cardss key={id} blog={blog} />;
              })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;
