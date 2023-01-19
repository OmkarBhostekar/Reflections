import { useRouter } from "next/navigation";
import React, { useState } from "react";

type Props = {};

const HeadLineCards = (props: Props) => {
  const data = [
    {
      img: "https://images.unsplash.com/photo-1535914254981-b5012eebbd15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      category: "Mental Health",
      title: "Mental Health and fitness blogs",
      desc: "Lorem ipsum dolor",
    },
    {
      img: "https://images.unsplash.com/photo-1589363358751-ab05797e5629?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1854&q=80",
      category: "Business",
      title: "Business blogs",
      desc: "Lorem ipsum dolor",
    },
    {
      img: "https://images.unsplash.com/photo-1620228885847-9eab2a1adddc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80",
      category: "Programming",
      title: "Programming blogs",
      desc: "Lorem ipsum dolor",
    },
    {
      img: "https://images.unsplash.com/photo-1535914254981-b5012eebbd15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      category: "Covid 19",
      title: "Health and fitness blogs",
      desc: "Lorem ipsum dolor",
    },
    {
      img: "https://images.unsplash.com/photo-1589363358751-ab05797e5629?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1854&q=80",
      category: "Machine Learning",
      title: "Fashion and beauty blogs",
      desc: "Lorem ipsum dolor",
    },
    {
      img: "https://images.unsplash.com/photo-1620228885847-9eab2a1adddc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80",
      category: "Politics",
      title: "Personal Development",
      desc: "Lorem ipsum dolor",
    },
  ];

  const router = useRouter();
  const handleClick = (e: any, category: string) => {
    router.push(`/blogs?category=${category}`);
  };
  return (
    <div className="max-w-[1420px] mx-auto p-4 py-12 space-y-5 dark:bg-gray-900 mt-12">
      <h1 className="text-center mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
        MORE TO READ
      </h1>
      <div className="grid md:grid-cols-3 gap-6">
        {data &&
          data.map((card, id) => {
            return (
              <div
                key={id}
                className="rounded-xl relative card-zoom"
                onClick={(e) => handleClick(e, card?.category)}
              >
                {/* Overlay */}
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                  <p className="font-bold text-2xl px-2 pt-4">{card?.title}</p>
                  <p className="px-2">{card?.desc}</p>
                  <button className="border rounded-xl px-5 py-1 border-white bg-white text-black mx-2 absolute bottom-4">
                    Read
                  </button>
                </div>
                <img
                  className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
                  src={card?.img}
                  alt="/"
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default HeadLineCards;
