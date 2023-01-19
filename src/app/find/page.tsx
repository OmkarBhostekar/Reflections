"use client";

import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import SearchBar from "components/SearchBar";
import Cardss from "components/Cards/Cardss";

type Props = {};

const SearchResult = (props: Props) => {
  const searchQuery = useSearchParams();
  const blogs = [
    {
      genre: "Article",
      dateOfPost: "14 days ago",
      title: "How to quickly deploy a static website",
      desc: "Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers.",
      autherImg:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
      autherName: "Bonnie Green",
    },
    {
      genre: "Article",
      dateOfPost: "14 days ago",
      title: "Our first project with React",
      desc: "Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers.",
      autherImg:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
      autherName: "Jese Leos",
    },
    {
      genre: "Article",
      dateOfPost: "14 days ago",
      title: "How to quickly deploy a static website",
      desc: "Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers.",
      autherImg:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
      autherName: "Bonnie Green",
    },
    {
      genre: "Article",
      dateOfPost: "14 days ago",
      title: "Our first project with React",
      desc: "Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers.",
      autherImg:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
      autherName: "Jese Leos",
    },
    {
      genre: "Article",
      dateOfPost: "14 days ago",
      title: "How to quickly deploy a static website",
      desc: "Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers.",
      autherImg:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
      autherName: "Bonnie Green",
    },
    {
      genre: "Article",
      dateOfPost: "14 days ago",
      title: "Our first project with React",
      desc: "Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers.",
      autherImg:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
      autherName: "Jese Leos",
    },
  ];
  const params = useSearchParams();
  const category = params.get("category");

  useEffect(() => {
    const goToTop = () => {
      window.scrollTo({
        top: 400,
        behavior: "smooth",
      });
    };
    goToTop();
  }, []);

  return (
    <div className="max-w-[1420px] mx-auto p-4 py-12 space-y-5 dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-900">
        <SearchBar />
        <div
          className="py-6 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-6"
          id="result"
        >
          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Results
            </h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {blogs?.map((blog, id) => {
              return <Cardss key={id} blog={blog} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchResult;
