"use client";
import React from "react";
import data from "./sample.json";
import { ChevronLeftIcon, PlayIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

type Props = {};

const blogDetail = {
  id: 56920,
  title: "Algorithms Explained",
  text: "Photo by Siora Photography on Unsplash\n\nI answered this way:\n\nThat’s probably a habit you picked up as a child when any size denomination of money would have been viewed as valuable and worth accumulating.\n\nOld habits like that are hard to break, even after we become adults. Besides, it’s a harmless habit.\n\nPersonally, I’ve graduated to actively looking for quarters, although I won’t pass up other coins.\n\nI wrote a poem that gives my philosophy on being selective about which pennies I reach down to pick up:\n\n__________________\n\nThanks for reading.",
  authors: "Margherita Gilley",
  timestamp: "2020-06-25 14:39:13.134000+00:00",
  tags: "Culture Society Book Review Trends Algorithms",
  image: "https://miro.medium.com/max/1400/0*UPrR_YckGORrt5LF",
};
import Speech from "react-speech";

const BlogDetail = (props: Props) => {
  const play = () => {};
  return (
    <div>
      <div className="flext flex-col flex-grow max-w-3xl ml-0 sm:ml-[75px] xl:ml-[370px]">
        <div className="mt-8 flex flex-row items-center cursor-pointer">
          <ChevronLeftIcon className="h-4 w-4 text-blue-500" />
          <div className="ml-2 text-md font-bold text-blue-500">
            Back to home
          </div>
        </div>
        <div className="mt-6">
          <img
            src={blogDetail.image}
            alt=""
            className="w-full max-h-[300px] lg:max-h-[450px] object-cover"
          />
        </div>
        <div className="flex">
          {/* <Speech text="Welcome to react speech" /> */}
        </div>
        <div className="flex flex-row mt-4">
          <span className="px-4 py-1.5 mr-2 rounded-full text-orange-500 bg-orange-100 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
            Programming
          </span>
          <span className="px-4 py-1.5 mr-2 rounded-full text-blue-500 bg-blue-100 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
            Algorithms
          </span>
          <span className="px-4 py-1.5 mr-2 rounded-full text-green-500 bg-green-100 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
            Software
          </span>
        </div>
        <div className="mt-4 md:text-5xl text-3xl font-bold">
          {blogDetail.title}
        </div>
        <p className="mt-6 text-justify">{blogDetail.text}</p>
      </div>
    </div>
  );
};

export default BlogDetail;
