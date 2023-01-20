"use client";
import UserCard from "components/UserCard";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const [userImage, setUserImage] = useState(
    "https://www.cnet.com/a/img/resize/4bbb5d8eeffea0beb519f4f5a21192068d133c34/hub/2021/09/10/56cb167f-7bff-4076-9b00-d415067f5477/screenshot-2021-09-10-at-5-44-32-pm.png?auto=webp&fit=crop&height=900&width=1200"
  );
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [active, setActive] = useState(1);
  const [postCount, setPostCount] = useState(0);

  useEffect(() => {
    if (userName.length > 0) {
      fetch(`/api/blog/myblogs?userName=${userName}`)
        .then((res) => res.json())
        .then((data) => setPostCount(data.length));
    }
  }, [userName]);

  const path = usePathname();
  useEffect(() => {
    const usrImg = localStorage.getItem("userImage");
    if (usrImg?.length > 0) {
      setUserImage(usrImg);
    }
    const usrName = localStorage.getItem("userName");
    if (usrName?.length > 0) {
      setUserName(usrName);
    }
    const usrEmail = localStorage.getItem("userEmail");
    if (usrName?.length > 0) {
      setUserEmail(usrEmail);
    }

    if (path.includes("bookmarked")) {
      setActive(2);
    }
    if (path.includes("myblogs")) {
      setActive(1);
    }
  }, []);

  const activeStyle =
    "text-blue-600 border-b-2 border-blue-600 dark:text-blue-500 dark:border-blue-500";
  return (
    <div className="max-w-[1420px] mx-auto flex flex-col justify-center items-center p-4">
      <UserCard
        userImage={userImage}
        userName={userName}
        userEmail={userEmail}
        postCount={postCount}
      />

      <div className="mt-12 border-b border-gray-200 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          <li className="mr-2">
            <Link
              onClick={() => setActive(1)}
              href="/dashboard/myblogs"
              className={`inline-flex p-4 border-b-2 rounded-t-lg group ${
                active == 1
                  ? activeStyle
                  : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              }`}
            >
              <svg
                aria-hidden="true"
                className={`w-5 h-5 mr-2 ${
                  active == 1
                    ? "text-blue-600 dark:text-blue-500"
                    : "text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              My Blogs
            </Link>
          </li>
          <li className="mr-2">
            <Link
              onClick={() => setActive(2)}
              href="/dashboard/bookmarked"
              className={`inline-flex p-4 border-b-2 rounded-t-lg group ${
                active == 2
                  ? activeStyle
                  : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              }`}
              aria-current="page"
            >
              <svg
                aria-hidden="true"
                className={`w-5 h-5 mr-2 ${
                  active == 2
                    ? "text-blue-600 dark:text-blue-500"
                    : "text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
              </svg>
              Bookmarked
            </Link>
          </li>
        </ul>
      </div>

      {children}
    </div>
  );
}
