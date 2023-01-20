import { useRouter } from "next/navigation";
import React, { useState } from "react";
import MentalHealth from "../assets/mental_health.jpg";
import Business from "../assets/business.jpg";
import Programming from "../assets/programming.jpg";
import Covid from "../assets/covid.jpg";
import ML from "../assets/ml.jpg";
import Blockchain from "../assets/blockchain.jpg";
import Image from "next/image";

type Props = {};

const HeadLineCards = (props: Props) => {
  const data = [
    {
      img: MentalHealth.src,
      category: "Mental Health",
      title: "Mental Health",
      desc: "Mental Health and fitness blogs",
    },
    {
      img: Business.src,
      category: "Business",
      title: "Business blogs",
      desc: "Valuable insights and strategies for business.",
    },
    {
      img: Programming.src,
      category: "Programming",
      title: "Programming blogs",
      desc: "Dive into the world of programming with us.",
    },
    {
      img: Covid.src,
      category: "Covid 19",
      title: "Covid-19 Precautions",
      desc: "Latest developments and information related to COVID-19.",
    },
    {
      img: ML.src,
      category: "Machine Learning",
      title: "Machin Learning and AI",
      desc: "Unlock the power of Machine Learning with us.",
    },
    {
      img: Blockchain.src,
      category: "Blockchain",
      title: "Blockchain Technology",
      desc: "Join us as we navigate the exciting world of blockchain technology.",
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
                className="rounded-xl relative card-zoom cursor-pointer"
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
                <Image
                  height={500}
                  width={500}
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
