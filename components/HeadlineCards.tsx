import React from "react";

type Props = {};

const HeadLineCards = (props: Props) => {
  return (
    <div className="max-w-[1420px] mx-auto p-4 py-12 space-y-5">
       <h1 className="text-center mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">MORE TO READ</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {/* Card */}
        <div className="rounded-xl relative">
          {/* Overlay */}
          <div className="absolute w-full h-full bg-black/25 rounded-xl text-white">
            <p className="font-bold text-2xl px-2 pt-4">
              Health and fitness blogs
            </p>
            <p className="px-2">Lorem ipsum dolor</p>
            <button className="border rounded-xl px-5 py-1 border-white bg-white text-black mx-2 absolute bottom-4">
              Read
            </button>
          </div>
          <img
            className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
            src="https://images.unsplash.com/photo-1535914254981-b5012eebbd15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="/"
          />
        </div>
        {/* Card */}
        <div className="rounded-xl relative">
          {/* Overlay */}
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <p className="font-bold text-2xl px-2 pt-4">
              Fashion and beauty blogs
            </p>
            <p className="px-2">Lorem ipsum dolor</p>
            <button className="border rounded-xl px-5 py-1 border-white bg-white text-black mx-2 absolute bottom-4">
              Read
            </button>
          </div>
          <img
            className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
            src="https://images.unsplash.com/photo-1589363358751-ab05797e5629?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1854&q=80"
            alt="/"
          />
        </div>
        {/* Card */}
        <div className="rounded-xl relative">
          {/* Overlay */}
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <p className="font-bold text-2xl px-2 pt-4">
              Personal finance blogs
            </p>
            <p className="px-2">Lorem ipsum dolor</p>
            <button className="border rounded-xl px-5 py-1 border-white bg-white text-black mx-2 absolute bottom-4">
              Read
            </button>
          </div>
          <img
            className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
            src="https://images.unsplash.com/photo-1620228885847-9eab2a1adddc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80"
            alt="/"
          />
        </div>
        {/* Card */}
        <div className="rounded-xl relative">
          {/* Overlay */}
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <p className="font-bold text-2xl px-2 pt-4">
              Personal finance blogs
            </p>
            <p className="px-2">Lorem ipsum dolor</p>
            <button className="border rounded-xl px-5 py-1 border-white bg-white text-black mx-2 absolute bottom-4">
              Read
            </button>
          </div>
          <img
            className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
            src="https://images.unsplash.com/photo-1620228885847-9eab2a1adddc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80"
            alt="/"
          />
        </div>
        {/* Card */}
        <div className="rounded-xl relative">
          {/* Overlay */}
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <p className="font-bold text-2xl px-2 pt-4">
              Fashion and beauty blogs
            </p>
            <p className="px-2">Lorem ipsum dolor</p>
            <button className="border rounded-xl px-5 py-1 border-white bg-white text-black mx-2 absolute bottom-4">
              Read
            </button>
          </div>
          <img
            className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
            src="https://images.unsplash.com/photo-1589363358751-ab05797e5629?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1854&q=80"
            alt="/"
          />
        </div>
        {/* Card */}
        <div className="rounded-xl relative">
          {/* Overlay */}
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <p className="font-bold text-2xl px-2 pt-4">
              Health and fitness blogs
            </p>
            <p className="px-2">Lorem ipsum dolor</p>
            <button className="border rounded-xl px-5 py-1 border-white bg-white text-black mx-2 absolute bottom-4">
              Read
            </button>
          </div>
          <img
            className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
            src="https://images.unsplash.com/photo-1535914254981-b5012eebbd15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="/"
          />
        </div>
      </div>

    </div>
  );
};

export default HeadLineCards;
