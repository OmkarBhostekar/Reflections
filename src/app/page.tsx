"use client";
import HeadLineCards from "components/HeadlineCards";
import Hero from "components/Hero";
import Latest from "components/Latest";
import MoreInfo from "components/MoreInfo";
import Newspaper from "components/Newspaper";
import Recommended from "components/Recommended";
import React from "react";
import "./globals.css";

type Props = {};

const Home = (props: Props) => {
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

  return <div className="scrollbar-hide">
    <Hero/>
    <MoreInfo/>
    <Recommended/>
    <Latest/>
    <HeadLineCards/>
    <Newspaper/>
  </div>;
};

export default Home;
