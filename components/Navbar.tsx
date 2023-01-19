"use client";
import React, { useEffect, useState } from "react";
import { Navbar as Nav } from "flowbite-react";
import MenuDropdown from "./MenuDropdown";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { Session } from "next-auth";
import { useRouter } from "next/navigation";
type Props = {
  session: Session | null;
};

const Navbar = ({ session }: Props) => {
  const [currTheme, setcurrTheme] = useState("");
  const router = useRouter();

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
          {/* Day - night toggler */}
          <span className="ml-auto md:hidden">
            {currTheme.length > 0 ? (
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
            ) : null}
            <Nav.Toggle className="" />
          </span>

          <Nav.Collapse className="m-auto">
            <Nav.Link className="text-blue-600 dark:text-blue-600 md:hidden">
              <Link href="/dashboard">Dashboard</Link>
            </Nav.Link>
            <Nav.Link>
              <Link href="/about">About</Link>
            </Nav.Link>
            <Nav.Link>
              <Link href="/trending">Trending</Link>
            </Nav.Link>
            <Nav.Link>
              <Link href="/contact">Contact</Link>
            </Nav.Link>
            <Nav.Link className="text-red-600 dark:text-red-600 md:hidden">
              <Link href="/">Log Out</Link>
            </Nav.Link>
          </Nav.Collapse>

          {/* Day - night toggler */}
          {currTheme.length > 0 ? (
            <button
              onClick={clickHandler}
              id="theme-toggle"
              type="button"
              className="hidden md:block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 md:float-right md:mr-4"
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
          ) : null}
          <div className="">
            {session ? (
              <MenuDropdown session={session} />
            ) : (
              <button
                onClick={() => router.push("/login")}
                className="inline-flex items-center justify-center px-3 py-1.5 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </Nav>
    </div>
  );
};

export default Navbar;
