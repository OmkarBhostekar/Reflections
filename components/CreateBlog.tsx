import React, { useState, useRef, useEffect } from "react";
import Multiselect from "multiselect-react-dropdown";
import SpeechToText from "./SpeechToText";

type Props = {};

const CreateBlogs = (props: Props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");
  const [next, setNext] = useState([]);

  const onMessageUpdated = (message: string) => {
    setMessage(message);
  };

  const fetchNextWords = async (str: string) => {
    if (str === "") return;
    fetch(`/api/ml/nextword?str=${str}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setNext(data.result));
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      console.log(message);
      const words = message.split(" ");
      const last10Words = words.slice(Math.max(words.length - 10, 0));
      const str = last10Words.join(" ");
      fetchNextWords(str);
    }, 2000);

    return () => clearTimeout(delayDebounceFn);
  }, [message]);

  const onNextClick = (word: string) => {
    setMessage(message + word + " ");
    setNext([]);
  };

  return (
    <div className="md:w-[90%] max-w-[1420px] mx-auto border-none focus:ring-0 bg-slate-50 mt-20 p-4 md:p-10 border-1 rounded dark:bg-gray-800 dark:text-white ">
      <input
        type="text"
        className="text-3xl	md:text-4xl dark:bg-gray-800  border-hidden	w-full antialiased 	italicborder-hidden overflow-hidden overflow-scroll border-transparent focus:border-transparent mb-10  bg-slate-50"
        placeholder="Type your title here..."
        onChange={(e) => setTitle(e.target.value)}
      />
      {next.length > 0 && (
        <div className="">
          <div className="mb-2">Next word suggestion</div>
          <div className="flex flex-row gap-4">
            {next.map((item) => (
              <span
                onClick={() => onNextClick(item)}
                className="px-4 py-2 rounded-full border border-gray-300 text-gray-500 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}
      <SpeechToText setMessage={setMessage} message={message} />

      <Multiselect
        className="mt-10 dark:bg-gray-800 dark:text-black "
        isObject={false}
        onKeyPressFn={function noRefCheck() {}}
        onRemove={function noRefCheck(e) {
          console.log(e);
        }}
        onSearch={function noRefCheck() {}}
        onSelect={function noRefCheck() {}}
        showCheckbox={true}
        options={[
          "Adevnture",
          "Computer",
          "Machin Learnign",
          "Artificial Intelligence",
          "Information Technology",
        ]}
        style={{
          chips: {
            background: "black",
          },
          multiselectContainer: {
            color: "none",
          },
          searchBox: {
            border: "black",
            "border-bottom": "1px solid black",
            "border-radius": "1px",
          },
        }}
      />

      <div className="grid place-content-center	pt-10">
        <button className="px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
          Publish
        </button>
      </div>
    </div>
  );
};

export default CreateBlogs;

// Path: components\CreateBlog\CreateBlog.tsx
