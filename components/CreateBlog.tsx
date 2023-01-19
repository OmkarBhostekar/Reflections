import React, { useState, useRef, useEffect } from "react";
import Multiselect from "multiselect-react-dropdown";
import JoditEditor from "jodit-react";
import { text } from "stream/consumers";
import { Tiptap } from "./TipTap";

type Props = {};

const CreateBlogs = (props: Props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // const [selectedValue, setSelectedValue] = useState([]);

  // const config = {
  //    // all options from https://xdsoft.net/jodit/doc/
  //   placeholder: "Whats on your Mind?",
  //   "toolbarButtonSize": "small",
  //   // "theme": "dark",

  // };
  // config={{
  //   theme: "dark",
  //   toolbarButtonSize: "small",
  // }}
  // dark mode

  return (
    <div className="md:w-[90%] max-w-[1420px] mx-auto bg-slate-50 mt-16 p-4 md:p-10 border-1 rounded dark:bg-gray-800 dark:text-white ">
      <input
        type="text"
        className="text-3xl	md:text-4xl dark:bg-gray-800  border-hidden	w-full antialiased	italicborder-hidden overflow-hidden overflow-scroll border-transparent focus:border-transparent mb-10  bg-slate-50"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* <textarea 
          className="text-2xl	antialiased	 border-hidden border-transparent focus:border-transparent "
          placeholder="Content"
        ></textarea> */}
      {/* <JoditEditor 
          ref={editor}
          value={content}
          onChange={(newContent) => setContent(newContent)}
          config={{
            theme: "dark",
          }}


        /> */}

      <Tiptap />
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
