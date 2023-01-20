"use client";
import Cards from "components/Cards/Cards";
import Mountain from "../../../../assets/mountain.jpg";
import River from "../../../../assets/river.jpg";

import Latest from "components/Latest";
import Recommended from "components/Recommended";
import UserCard from "components/UserCard";
import React from "react";
import Blog from "@/types/Blog";
type Props = {};

const Profile = (props: Props) => {
  const size = 1;
  const userId = "PrateekID";
  const blogs = [
    {
      img: Mountain.src,
      isMemberOnly: true,
      title: "Best Mountain Trails 2020",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      autherImg:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
      autherName: "John Smith",
      dateOfPost: "Aug 18",
    },
    {
      img: River.src,
      isMemberOnly: false,
      title: "15 Rivers In Norway",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      autherImg:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
      autherName: "Karen Johnson",
      dateOfPost: "Aug 10",
    },
    {
      img: Mountain.src,
      isMemberOnly: true,
      title: "Best Mountain Trails 2020",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      autherImg:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
      autherName: "John Smith",
      dateOfPost: "Aug 18",
    },
    {
      img: River.src,
      isMemberOnly: false,
      title: "15 Rivers In Norway",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      autherImg:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
      autherName: "Karen Johnson",
      dateOfPost: "Aug 10",
    },
  ];
  return (
    <div className="max-w-[1420px] mx-auto flex flex-col justify-center items-center p-4">
      <UserCard userImage="" userName="" userEmail="" postCount={0} />
      <div className="w-full space-y-3 p-4">
        <h1 className="text-2xl lg:text-4xl font-bold text-black dark:text-white">
          Popular Blogs
        </h1>

        {/* {size === 0 ? (
          userId === user ? (
            <>
              <p className="text-2xl">Your Blogs,</p>
              <p className="text-2xl">You have not created any blogs yet</p>
            </>
          ) : (
            <>
              <p className="text-2xl">{user} Blogs,</p>
              <p className="text-2xl">
                This user has not created any blogs yet
              </p>
            </>
          )
        ) : ( */}
        <div className="py-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* <!--Card 1--> */}

          {blogs &&
            blogs?.map((blog, id) => {
              return <Cards key={id} blog={blog} />;
            })}
        </div>
        {/* )} */}
      </div>
    </div>
  );
};

export default Profile;
