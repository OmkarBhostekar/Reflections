"use client";
import React, { useEffect, useState } from "react";
import { Navbar as Nav } from "flowbite-react";
type Props = {};

const Navbar = (props: Props) => {
  const [currTheme, setcurrTheme] = useState("");

  const clickHandler = () => {
    console.log("clicked");
    if (localStorage.theme === "dark") localStorage.theme = "light";
    else localStorage.theme = "dark";
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setcurrTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setcurrTheme("light");
    }
  };

  useEffect(() => {
    clickHandler();
  }, []);
  return (
    <div className="max-w-[1420px] mx-auto flex justify-center items-center sticky top-0 z-20">
      <Nav
        // fluid={true}
        rounded={true}
        className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 w-full z-20 border-b border-gray-200 dark:border-gray-600"
      >
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Nav.Brand href="/" className="flex items-center cursor-pointer">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-6 mr-3 sm:h-9"
              alt="Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Reflections
            </span>
          </Nav.Brand>

          <div className="hidden flex items-center md:block md:order-2">
            <button
              type="button"
              className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
                alt="user photo"
              />
            </button>
          </div>

          <Nav.Toggle className="ml-auto"/>
          <Nav.Collapse className="m-auto">
            <Nav.Link className="text-blue-600 md:hidden" href="/dashboard">
              Dashboard
            </Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/navbars">Services</Nav.Link>
            <Nav.Link href="/navbars">Pricing</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link className="text-red-600 md:hidden" href="/contact">
              Log Out
            </Nav.Link>
          </Nav.Collapse>

          {/* Day - night toggler */}
          <button
            onClick={clickHandler}
            id="theme-toggle"
            type="button"
            className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 md:float-right md:mr-4"
          >
            <svg
              id="theme-toggle-dark-icon"
              className={`${currTheme == "dark" && "hidden"} w-5 h-5`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
            <svg
              id="theme-toggle-light-icon"
              className={`${currTheme == "light" && "hidden"} w-5 h-5`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </Nav>
    </div>
  );
};

export default Navbar;
