import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
type Props = {
  onSearch: (query: string) => void;
};

const SearchBar = (props: Props) => {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onSearch(query);
  };
  return (
    <div className="max-w-[1420px] mx-auto flex flex-col justify-center items-center p-4 mt-12">
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md sm:text-center">
            <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">
              Find What You're Looking For
            </h2>
            <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">
              Discover the latest content on our blog. Search by keywords or
              topics to find exactly what you're looking for.
            </p>
            <form onSubmit={handleClick}>
              <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
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
                    type="submit"
                    className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchBar;
