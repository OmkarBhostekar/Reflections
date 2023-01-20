"use client";

import React, { useEffect, useState } from "react";
import Cardss from "components/Cards/Cardss";
type Props = {};

const Bookmarked = (props: Props) => {
  const [userEmail, setUserEmail] = useState("");
  const [bookmarkedBlogs, setBookmarkedBlogs] = useState([]);
  useEffect(() => {
    const usrEmail = localStorage.getItem("userEmail");
    if (usrEmail?.length > 0) {
      setUserEmail(usrEmail);
    }
  }, [userEmail]);

  useEffect(() => {
    if (userEmail.length > 0) {
      fetch(`/api/user/bookmark?userEmail=${userEmail}`)
        .then((res) => res.json())
        .then((data) => {
          setBookmarkedBlogs(data);
        });
    }
  }, [userEmail]);
  return (
    <section className="bg-white dark:bg-gray-900 max-w-[1420px] mx-auto flex justify-between items-center p-4 mt-12">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h1 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Bookmarked
          </h1>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Welcome to our bookmarked blog section! Here you'll find all the
            blogs bookmarked by you.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {bookmarkedBlogs &&
            Array.isArray(bookmarkedBlogs) &&
            bookmarkedBlogs.map((blog, id) => {
              return <Cardss key={id} blog={blog} fromBookmarked={true} />;
            })}
        </div>
      </div>
    </section>
  );
};

export default Bookmarked;
