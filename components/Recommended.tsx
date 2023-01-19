import React, {useEffect, useState} from "react";
import { useRouter } from "next/navigation";
import Mountain from "../assets/mountain.jpg";
import Forest from "../assets/forest.jpg";
import River from "../assets/river.jpg";
import Cards from "./Cards/Cards";
type Props = {
  bid?:string
};
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
  const router = useRouter();
  const [recs, setRecs] = useState([])
  const bid = props.bid;
  const fetchRecs = async () => {
    if (bid) {
      // @ts-ignore
      fetch(`/api/blog/recommend?id=${bid}`)
        .then((res) => res.json())
        .then((data) => {
          data.length = 6;
          setRecs(data);
        });
    }
  };
  useEffect(()=>{
    fetchRecs()
  },[bid])

  const onRecClick = (id: string) => {
    router.push(`/blog/${id}`);
  };

  // const blogs = [
  //   {
  //     img: Mountain.src,
  //     isMemberOnly: true,
  //     title: "Best Mountain Trails 2020",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.",
  //     autherImg:
  //       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
  //     autherName: "John Smith",
  //     dateOfPost: "Aug 18",
  //   },
  //   {
  //     img: River.src,
  //     isMemberOnly: false,
  //     title: "15 Rivers In Norway",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.",
  //     autherImg:
  //       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
  //     autherName: "Karen Johnson",
  //     dateOfPost: "Aug 10",
  //   },
  //   {
  //     img: Mountain.src,
  //     isMemberOnly: true,
  //     title: "Best Mountain Trails 2020",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.",
  //     autherImg:
  //       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
  //     autherName: "John Smith",
  //     dateOfPost: "Aug 18",
  //   },
  //   {
  //     img: River.src,
  //     isMemberOnly: false,
  //     title: "15 Rivers In Norway",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.",
  //     autherImg:
  //       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
  //     autherName: "Karen Johnson",
  //     dateOfPost: "Aug 10",
  //   },
  // ];
  return (
    <div className="max-w-[1420px] mx-auto flex flex-col justify-center items-center p-4 dark:bg-gray-900 mt-12">
      <h1 className="text-center mt-8 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
        FOR YOU!
      </h1>

      <div className="p-4 gap-y-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 md:gap-x-8 md:gap-y-12">
        {/* <!--Card 1--> */}

        {recs?.length>0 && recs?.map((rec:any) => {
          return (
            <div className="" key={rec.id}>
                  <div
                    onClick={() => onRecClick(rec.id)}
                    className="flex flex-col w-full hover:scale-110 ease-in duration-300 cursor-pointer"
                  >
                    <img
                      src={`https://source.unsplash.com/random/?${rec?.tags.join(
                        ","
                      )}`}
                      alt=""
                      className="aspect-video object-cover"
                    />
                    <div className="flex mt-3">
                      {rec.tags.length > 0 && (
                        <span
                          key={0}
                          className="px-3 py-1 mr-2 rounded-full text-blue-500 dark:text-white dark:bg-[#213ABF] bg-blue-100 font-semibold text-xs flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease"
                        >
                          {rec.tags[0]}
                        </span>
                      )}
                    </div>
                    <div className="text-md mt-2 font-semibold dark:text-white">
                      {rec.title}
                    </div>
                  </div>
                </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recommended;
