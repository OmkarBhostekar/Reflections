"use client"
import React, {useEffect, useState} from "react";
import Cardss from "components/Cards/Cardss";

type Props = {};

const MyBlogs = (props: Props) => {

  

  const [myblogs, setMyBlogs] = useState([]);
  const [userName, setuserName] = useState("");

  useEffect(() => {
    const usrName = localStorage.getItem("userName");
    if (usrName?.length > 0) {
      setuserName(usrName);
      console.log(userName)
    }
  }, [userName]);
  useEffect(() => {
    if(userName.length>0){
      fetch(`/api/blog/myblogs?userName=${userName}`)
      .then((res) => res.json())
      .then((data) => setMyBlogs(data));
    }
  }, [userName])
  console.log("My bLogss", myblogs)
  return (
    <section id="latest" className="bg-white dark:bg-gray-900 max-w-[1420px] mx-auto flex justify-between items-center p-4 mt-12">
      <div className="py-8 md:px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h1 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            My Blogs
          </h1>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Welcome to our my blog section! Here you'll find all the blogs that you have posted.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {myblogs && Array.isArray(myblogs) && myblogs.map((blog, id) => {
            return (
              <Cardss key={id} blog={blog} fromOwnBlog={true}/>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MyBlogs;
