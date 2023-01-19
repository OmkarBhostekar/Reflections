"use client";
import React, { useEffect, useState } from "react";
import data from "./sample.json";
import { ChevronLeftIcon, PlayIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Blog from "@/types/Blog";
import { useRouter } from "next/navigation";
import { TextToSpeech, useTts } from "tts-react";
import type { TTSHookProps } from "tts-react";
import parse from "html-react-parser";
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

const BlogDetail = ({ params }: any) => {
  const play = () => {};
  const bid = params["bid"];
  console.log(params["bid"]);
  const [blog, setBlog] = useState<Blog>();
  const [recs, setRecs] = useState<Blog[]>([]);
  const [summery, setSummery] = useState<string>("");
  const router = useRouter();

  const fetchBlog = async () => {
    if (bid) {
      // @ts-ignore
      fetch(`/api/blog/${bid}`)
        .then((res) => res.json())
        .then((data) => setBlog(data));
    }
  };
  const fetchRecs = async () => {
    if (bid) {
      // @ts-ignore
      fetch(`/api/blog/recommend?id=${bid}`)
        .then((res) => res.json())
        .then((data) => setRecs(data));
    }
  };
  const fetchSummary = async (text: string) => {
    console.log("fetching summary");

    fetch(`${process.env.MODEL_API_ENDPOINT}/summarizer`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: text,
      }),
    })
      .then((res) => res.json())
      .then((data) => setSummery(data.result));
  };
  // useEffect(() => {
  //   if (blog && summery === "") fetchSummary(blog.text);
  // }, [blog]);
  useEffect(() => {
    fetchBlog();
    fetchRecs();
  }, []);

  const [scroll, setScroll] = useState("");
  useEffect(() => {
    let progressBarHandler = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;

      setScroll(scroll);
    };

    window.addEventListener("scroll", progressBarHandler);

    return () => window.removeEventListener("scroll", progressBarHandler);
  });

  const formatDate = (date: string | undefined) => {
    if (data === undefined) return "";
    const d = new Date(date!);
    return d.toDateString();
  };

  const onRecClick = (id: string) => {
    router.push(`/blog/${id}`);
  };

  return (
    <div className="flex flex-col">
      <div id="progressBarContainer">
        <div
          id="progressBar"
          style={{ transform: `scale(${scroll}, 1)`, opacity: `${scroll}` }}
        />
      </div>
      <div className="flext flex-col flex-grow max-w-3xl ml-[20px] mr-[20px] xl:ml-[370px]">
        <div className="mt-20 flex flex-row items-center cursor-pointer">
          <ChevronLeftIcon className="h-4 w-4 text-blue-500 dark:text-white" />
          <div
            onClick={() => router.back()}
            className="ml-2 text-md font-bold text-blue-500 dark:text-white"
          >
            Back to home
          </div>
        </div>
        <div className="mt-6">
          {blog && blog?.tags && blog?.tags?.length > 0 && (
            <img
              src={`https://source.unsplash.com/random/?${blog?.tags?.join(
                ","
              )}`}
              alt=""
              className="w-full max-h-[300px] lg:max-h-[450px] object-cover"
            />
          )}
        </div>
        <div className="flex">
          {/* <Speech text="Welcome to react speech" /> */}
        </div>
        <div className="flex flex-row mt-6">
          {blog &&
            blog?.tags?.map((tag, id) => (
              <span
                key={id}
                className="px-4 py-1.5 mr-2 rounded-full text-blue-500 dark:text-white dark:bg-[#213ABF] bg-blue-100 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease"
              >
                {tag}
              </span>
            ))}
        </div>
        <div className="mt-4 md:text-5xl text-3xl font-bold dark:text-white">
          {blog?.title}
        </div>
        <div className="mt-8 dark:text-[#D1CFDB] text-justify">{summery}</div>
        <div className="flex mt-8">
          <img
            className="h-20 w-20 rounded-full"
            src={`https://api.dicebear.com/5.x/personas/svg?seed=${blog?.authors}}`}
          />
          <div className="flex flex-col justify-evenly ml-4">
            <div className=""></div>
            <div className="uppercase dark:text-white font-semibold">
              {blog?.authors}
            </div>
            <div className="dark:text-[#D1CFDB] font-semibold">
              {formatDate(blog?.timestamp)}
            </div>
          </div>
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="mt-6 text-justify new-line dark:text-[#D1CFDB]">
          {/*  */}
          <div>
            
          

            <TextToSpeech 
               
              align="vertical"
              allowMuting
              markBackgroundColor="#55AD66"
              markColor="white"
              markTextAsSpoken
              onBoundary={function noRefCheck() {}}
              onEnd={function noRefCheck() {}}
              onError={function noRefCheck() {}}
              onPause={function noRefCheck() {}}
              onPitchChange={function noRefCheck() {}}
              onRateChange={function noRefCheck() {}}
              onStart={function noRefCheck() {}}
              onVolumeChange={function noRefCheck() {}}
              position="topLeft"
              rate={1.5}
              size="medium"
              volume={1}
            >
              {blog?.text}
              
            </TextToSpeech>
          </div>
        </div>
        <div className="mt-8">
          <div className="text-2xl font-bold dark:text-white">
            You May Also Like
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 mt-4 gap-6 justify-between">
            {recs &&
              recs.length > 0 &&
              recs.map((rec) => (
                <div className="" key={rec.id}>
                  <div
                    onClick={() => onRecClick(rec.id)}
                    className="flex flex-col w-full hover:scale-110 ease-in duration-300 cursor-pointer"
                  >
                    <img
                      src={`https://source.unsplash.com/random/?${rec?.tags.join(
                        ","
                      )}`}
                      alt=""
                      className="aspect-video object-cover"
                    />
                    <div className="flex mt-3">
                      {rec.tags.length > 0 && (
                        <span
                          key={0}
                          className="px-3 py-1 mr-2 rounded-full text-blue-500 dark:text-white dark:bg-[#213ABF] bg-blue-100 font-semibold text-xs flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease"
                        >
                          {rec.tags[0]}
                        </span>
                      )}
                    </div>
                    <div className="text-md mt-2 font-semibold dark:text-white">
                      {rec.title}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
