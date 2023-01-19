import Link from "next/link";
import React from "react";
import Cardss from "./Cards/Cardss";

type Props = {};

const Latest = (props: Props) => {
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
  ];
  return (
    <section id="latest" className="bg-white dark:bg-gray-900 max-w-[1420px] mx-auto flex justify-between items-center p-4 mt-12">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h1 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            LATEST BLOGS
          </h1>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Welcome to our latest blog section! Here you'll find the most recent
            posts from our community of bloggers.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {blogs && blogs.map((blog, id) => {
            return (
              <Cardss key={id} blog={blog}/>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Latest;
