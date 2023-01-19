import React from "react";
import { useRouter } from "next/navigation";
import Mountain from "../assets/mountain.jpg";
import Forest from "../assets/forest.jpg";
import River from "../assets/river.jpg";
import Cards from "./Cards/Cards";
type Props = {};
type Blog = {
  img: string;
  isMemberOnly: boolean;
  title: string;
  desc: string;
  autherImg: string;
  autherName: string;
  dateOfPost: string;
}
const Recommended = (props: Props) => {

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
    <div className="max-w-[1420px] mx-auto flex flex-col justify-center items-center p-4 dark:bg-gray-900 mt-12">
      <h1 className="text-center mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
        FOR YOU!
      </h1>

      <div className="p-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-5">
        {/* <!--Card 1--> */}

        {blogs && blogs?.map((blog: Blog, id) => {
          return (
            <Cards key={id} blog={blog}/>
          );
        })}
      </div>
    </div>
  );
};

export default Recommended;
