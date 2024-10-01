import React, { useMemo, useState } from "react";
import { nthprime } from "../utils/helper";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDark, setIsDark] = useState(true);

  console.log("rendering....");
  //   const prime = nthprime(text);
  const prime = useMemo(() => {
    nthprime(text);
  }, [text]); //usememo use to memorize heavy calculation so if page rerender  it will not affect other funtionality

  return (
    <div
      className={`w-96 h-96 border border-black  p-3 m-3 ${
        isDark && "bg-black text-white"
      }`}
    >
      <button
        className="p-2 m-2 bg-green-500"
        onClick={() => setIsDark(!isDark)}
      >
        Toggle
      </button>

      <input
        type="number"
        className="px-2 m-2 p-2 w-70 bg-gray-100"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <p className={`${isDark && "text-white"}`}>OutPut = {prime}</p>
    </div>
  );
};

export default Demo;
