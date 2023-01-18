import React, { useState, useRef } from "react";
import Multiselect from "multiselect-react-dropdown";
import JoditEditor from "jodit-react";
type Props = {};

const CreateBlogs = (props: Props) => {
  const editor = useRef(null);
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
    <div>
     
      <div className="flex flex-col pl-20 pr-20 pt-10 rounded ">
     <div className="bg-slate-50 p-10 border-1 rounded ">  

        <input
          type="text"
          className="text-5xl	 border-hidden	w-full antialiased	italicborder-hidden overflow-hidden overflow-scroll border-transparent focus:border-transparent mb-10  bg-slate-50"
          placeholder="Title" onChange={(e) => setTitle(e.target.value)}
        />

        {/* <textarea 
          className="text-2xl	antialiased	 border-hidden border-transparent focus:border-transparent "
          placeholder="Content"
        ></textarea> */}
        <JoditEditor
          ref={editor}
          value={content}
          onChange={(newContent) => setContent(newContent)}
          config={{
            "placeholder": "Whats on your Mind?",
            "buttons": "bold,italic,underline,|,ul,ol,|,outdent,indent,|,font,fontsize,brush,paragraph,|,image,video,table,link,|,align,undo,redo,hr,symbol,|,cut,copy,paste,eraser,selectall,|,source,print,maximize,about",
            "showCharsCounter": false,
            "showWordsCounter": false,
            "showXPathInStatusbar": false
            // "theme": "dark",
          }}

        />

        <Multiselect className="mt-10 "
          isObject={false}
          onKeyPressFn={function noRefCheck(){}}
          onRemove={function noRefCheck(e){
            console.log(e)
          }}
          onSearch={function noRefCheck(){}}
          onSelect={function noRefCheck(){}}
          showCheckbox={true}
          
          options={[
            'Adevnture',
            'Computer',
            'Machin Learnign',
            'Artificial Intelligence',
            'Information Technology',
          ]}
          style={{
            chips: {
              background: 'black'
            },
            multiselectContainer: {
              color: 'none'
            },
            searchBox: {
              border: 'red',
              'border-bottom': '1px solid transparent',
              'border-radius': '0px'
            }
          }}
         
          
        />
        
     
        <div className="grid place-content-center	pt-10">
        <button className="bg-blue-400 rounded-xl m-4 p-4  hover:bg-green-400">Publish</button>
      </div>
      </div>
      
      </div>
    </div>
  );
};

export default CreateBlogs;

// Path: components\CreateBlog\CreateBlog.tsx
