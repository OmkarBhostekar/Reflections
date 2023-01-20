"use client";
import Blog from "@/types/Blog";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { title } from "process";
import React, { useState } from "react";

type Props = {
  key: number;
  blog: Blog;
  fromBookmarked?: Boolean;
  fromOwnBlog?: Boolean;
};

const formatDate = (date: string | undefined) => {
  if (date === undefined) return "";
  const d = new Date(date!);
  return d.toDateString();
};

const Cardss = (props: Props) => {
  const router = useRouter();
  const blog = props.blog;
  const fromBookmarked = props.fromBookmarked;
  const fromOwnBlog = props.fromOwnBlog;

  const [isBookmarked, setIsBookmarked] = useState(true);
  const [isOwnBlog, setIsOwnBlog] = useState(true);

  function deleteBlog(){
    // delete the blog.....
  }
  return (
    <article
      onClick={() => router.push(`/blog/${blog?.id}`)}
      className="card-zoom p-6 cursor-pointer bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
    >
      <div className="flex justify-between items-center mb-5 text-gray-500">
        <div className="flex items-center space-x-2">
          <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
            <svg
              className="mr-1 w-3 h-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                clip-rule="evenodd"
              ></path>
              <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
            </svg>
            Article
          </span>
          {fromBookmarked && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsBookmarked(!isBookmarked);
              }}
              id="theme-toggle"
              type="button"
              className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none rounded-lg text-sm p-2.5 md:float-right md:mr-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`${isBookmarked || "hidden"} w-6 h-6`}
              >
                <path
                  fill-rule="evenodd"
                  d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z"
                  clip-rule="evenodd"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className={`${isBookmarked && "hidden"} w-6 h-6`}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                />
              </svg>
            </button>
          )}
          {fromOwnBlog && (
            <button
            onClick={(e) => {
              e.stopPropagation();
              deleteBlog(!isBookmarked);
            }}
              id="theme-toggle"
              type="button"
              className="text-red-500 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none rounded-lg text-sm p-2.5 md:float-right md:mr-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          )}
        </div>
        <span className="text-sm">{formatDate(blog.timestamp)}</span>
      </div>
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <Link href={`/blog/${blog?.id}`}>{blog?.title}</Link>
      </h2>
      <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
        {blog && blog.text && blog.text.slice(0, 20)}
      </p>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            className="w-7 h-7 rounded-full"
            src={`https://api.dicebear.com/5.x/personas/svg?seed=${blog?.authors}}`}
            alt="Bonnie Green avatar"
          />
          <span className="font-medium dark:text-white">{blog?.authors}</span>
        </div>
        <div className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
          Read more
          <svg
            className="ml-2 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </article>
  );
};

export default Cardss;
