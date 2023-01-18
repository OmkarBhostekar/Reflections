"use client";
import HeadLineCards from "components/HeadlineCards";
import Hero from "components/Hero";
import Latest from "components/Latest";
import MoreInfo from "components/MoreInfo";
import Newspaper from "components/Newspaper";
import Recommended from "components/Recommended";
import React, {useEffect, useState} from "react";
import "./globals.css";

type Props = {};

const Home = (props: Props) => {
  const [scroll, setScroll] = useState("");
  // const clickHandler = () => {
  //   console.log("clicked");
  //   if (localStorage.theme === "dark") localStorage.theme = "light";
  //   else localStorage.theme = "dark";
  //   if (
  //     localStorage.theme === "dark" ||
  //     (!("theme" in localStorage) &&
  //       window.matchMedia("(prefers-color-scheme: dark)").matches)
  //   ) {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // };

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

  return (
    <div className="">
      <div id="progressBarContainer">
        <div
          id="progressBar"
          style={{ transform: `scale(${scroll}, 1)`, opacity: `${scroll}` }}
        />
      </div>
      <Hero />
      <MoreInfo />
      <Recommended />
      <Latest />
      <HeadLineCards />
      <Newspaper />
    </div>
  );
};

export default Home;
