import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { useState } from "react";
import { javascript } from "@codemirror/lang-javascript";
import { java } from "@codemirror/lang-java";
import { cpp } from "@codemirror/lang-cpp";
import { python } from "@codemirror/lang-python";
import axios from "axios";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { useStateValue } from "../context/stateProvider";
const RoomPageEditorSection = () => {
  const [code, setCode] = useState("");
  const [chosenLang, setChosenLang] = useState("python");
  const [{ newRoom, activeQuestion, fake }, dipatch] = useStateValue();
  const userId = "123";
  const onChange = React.useCallback((value, ViewUpdate) => {
    setCode(value);
  }, []);
  const runCode = async () => {
    console.log(code);
    const url = "https://devs-clash.onrender.com/python";
    const body = {
      code: code,
      id: userId,
      roomId: newRoom.id,
      Q: activeQuestion,
    };
    axios
      .post(url, body, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("first");
        // Do something with the response data
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="bg-primary_gray font-monte flex-col border-2 w-[32rem] border-white h-[auto] justify-start px-1 gap-4 pt-[5rem]">
      <div className="w-auto items-center justify-start flex gap-2 mb-[5px]">
        <label htmlFor="topic">Language </label>
        <select
          id="topic"
          name="topic"
          onChange={(e) => {
            setChosenLang(e.target.value);
          }}
        >
          <option value="python">Select Language</option>
          <option value="cpp">C++</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="javascript">Js</option>
        </select>
        <div className="ml-auto">00:02:30</div>
      </div>

      <CodeMirror
        value={`import sys;

def add(a):
  # enter your code here

if __name__ == "__main__":
  a = int(sys.argv[1])
  result = int(sys.argv[3])
  print(add(a) == result)
`}
        height="100%"
        width="30rem"
        // option={{mode:'python'}}
        theme={dracula}
        onChange={onChange}
        extensions={[java({})]}
      ></CodeMirror>
      {/* <CodeMirror
        value={""}
        height="auto"
        width="30rem"
        option={{ mode: "text/x-java" }}
        theme={dracula}
        onChange={onChange}
        extensions={[java({})]}
      ></CodeMirror> */}
      <div
        onClick={runCode}
        className="absolute bottom-[1rem] cursor-pointer bg-primary_green text-black px-4 py-1 rounded-lg font-monte"
      >
        {" "}
        Submit Now
      </div>
    </div>
  );
};

export default RoomPageEditorSection;
