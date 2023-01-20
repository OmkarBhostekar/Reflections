"use client";
import React, { useEffect, useState } from "react";
import { Navbar as Nav } from "flowbite-react";
import MenuDropdown from "./MenuDropdown";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { Session } from "next-auth";
import { useRouter } from "next/navigation";
import Logo from "../assets/logo.png";
type Props = {
  session: Session | null;
};

const Navbar = ({ session }: Props) => {
  const [currTheme, setcurrTheme] = useState("");
  const router = useRouter();
  localStorage.setItem("author", session?.user?.name || "");
  localStorage.setItem("authorImage", session?.user?.image || "");
  localStorage.setItem("isLoggedIn", session ? "true" : "false");

  const clickHandler = () => {
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
    localStorage.setItem("userImage", session?.user?.image);
    localStorage.setItem("userName", session?.user?.name);
    localStorage.setItem("userEmail", session?.user?.email);

    // fetch(`/api/user/bookmark?userEmail=${session?.user?.email}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   });

    // fetch(`/api/user/bookmark`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     userEmail: session?.user?.email,
    //     blogId: "63c8518431ad3b98d781c00d",
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     // data.length = 6;
    //     console.log(data);
    //   });

    clickHandler();
  }, []);

  const [query, setQuery] = useState("");
  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query && query.length > 0) {
      router.push(`/find?search=${query}`);
    }
  };

  // const onSearch = (query: string) => {
  //   if (query && query.length > 0) {
  //     router.push(`/find?search=${query}`);
  //   }
  // };
  return (
    <div className="max-w-[1420px] mx-auto flex justify-center items-center sticky top-0 z-20">
      <Nav
        // fluid={true}
        rounded={true}
        className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 w-full z-20 border-b border-gray-200 dark:border-gray-600"
      >
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Nav.Brand href="/" className="flex items-center cursor-pointer">
            <img src={Logo.src} className="h-6 mr-3 sm:h-9" alt="Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Reflections
            </span>
          </Nav.Brand>

          {/* <form onSubmit={handleClick}> */}
          {/* <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm hidden sm:flex sm:space-y-0">
            <div className="relative w-full">
              <label
                htmlFor="email"
                className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Email address
              </label>
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="-8 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>search</title>{" "}
                    <path d="M16.080 22.72l-4.16-4.16c2.040-2.6 1.84-6.4-0.56-8.76-1.24-1.24-2.92-1.96-4.72-1.96s-3.44 0.68-4.68 1.96c-1.28 1.24-1.96 2.92-1.96 4.68s0.68 3.44 1.96 4.72c1.24 1.24 2.92 1.96 4.72 1.96 1.48 0 2.92-0.48 4.080-1.4l4.16 4.16c0.16 0.16 0.36 0.24 0.6 0.24s0.44-0.080 0.6-0.24c0.28-0.32 0.28-0.88-0.040-1.2zM3.12 18c-0.92-0.92-1.44-2.2-1.44-3.52s0.52-2.56 1.44-3.52c0.96-0.92 2.2-1.44 3.52-1.44s2.56 0.52 3.52 1.44c1.92 1.96 1.92 5.080 0 7.040-0.92 0.92-2.2 1.44-3.52 1.44-1.32 0.040-2.56-0.48-3.52-1.44z"></path>{" "}
                  </g>
                </svg>
              </div>
              <input
                className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Search"
                type="text"
                id="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                required
              />
            </div>
            <div>
              <button
                onClick={handleClick}
                type="submit"
                className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Search
              </button>
            </div>
          </div> */}
          {/* </form> */}

          {/* <Nav.Collapse className="m-auto">
            <Nav.Link className="text-blue-600 dark:text-blue-600 md:hidden">
              <Link href="/dashboard">Dashboard</Link>
            </Nav.Link>
            <Nav.Link>
              <Link href="/about">About</Link>
            </Nav.Link>
            <Nav.Link>
              <Link href="/dashboard">Dashboard</Link>
            </Nav.Link>
            <Nav.Link>
              <Link href="/contact">Contact</Link>
            </Nav.Link>
            <Nav.Link className="text-red-600 dark:text-red-600 md:hidden">
              <Link href="/">Log Out</Link>
            </Nav.Link>
          </Nav.Collapse> */}

          {/* Day - night toggler */}
          {/* {currTheme.length > 0 ? (
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
          ) : null} */}

          <div className="flex gap-2">
            {/* Day - night toggler */}
            <span className="ml-auto">
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
              {/* <Nav.Toggle className="" /> */}
            </span>
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
        </div>
      </Nav>
    </div>
  );
};

export default Navbar;
