import React, { useEffect } from "react";

const OutputBox = ({ response }) => {
  useEffect(() => {
    document.getElementById.innerHtml = response;
  }, [response]);
  return (
    <div className="bg-gray-800  rounded-lg px-4 py-6">
      <textarea
        type="text"
        className={`w-full ${response ? 'h-36' : 'h-auto'} bg-gray-700 px-4 py-6 text-white rounded-lg  outline-none focus:ring-2 focus:ring-purple-500`}
        placeholder="Your Output Goes Here!"
        value={response}
        onChange={(e) => e.target.value}
      />
    </div>
  );
};

export default OutputBox;
