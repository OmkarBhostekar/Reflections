"use client";
import HeadLineCards from "components/HeadlineCards";
import Hero from "components/Hero";
import Latest from "components/Latest";
import MoreInfo from "components/MoreInfo";
import Newspaper from "components/Newspaper";
import Recommended from "components/Recommended";
import SearchBar from "components/SearchBar";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./globals.css";

type Props = {};

const Home = (props: Props) => {
  const router = useRouter();
  const clickHandler = () => {
    if (localStorage.theme === "dark") localStorage.theme = "light";
    else localStorage.theme = "dark";
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const [bid, setBid] = useState("")
  useEffect(() => {
    setBid(localStorage.getItem("bid"));
    clickHandler();
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

  const onSearch = (query: string) => {
    if (query && query.length > 0) {
      router.push(`/find?search=${query}`);
    }
  };

  return (
    <div className="max-w-[1420px] mx-auto">
      <div className="max-w-[1420px] mx-auto flex items-center justify-center">
        <div id="progressBarContainer" className="w-full">
          <div
            id="progressBar"
            style={{ transform: `scale(${scroll}, 1)`, opacity: `${scroll}` }}
          />
        </div>
      </div>
      {/* <button onClick={clickHandler}>Click me</button> */}
      <Hero />
      <MoreInfo />
      <SearchBar onSearch={onSearch}/>
      {
        bid?.length>0 && <Recommended bid={bid}/>
      }
      <Latest />
      <HeadLineCards />
      <Newspaper />
    </div>
  );
};

export default Home;
