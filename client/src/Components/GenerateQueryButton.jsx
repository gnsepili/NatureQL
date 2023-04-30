import React from "react";
import axios from "axios";
const GenerateQueryButton = ({ setResponse, inputMessage, DBSchema}) => {





  const fetchQueryResponse = () => {
    axios.post("http://127.0.0.1:8000/nlsql", {
      prompt: inputMessage == null ? alert("type input query") : inputMessage,
      dbSchema: DBSchema == null ? alert("enter DB Schema") : DBSchema
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => setResponse(JSON.stringify(response.data.result).replace(/\n/g, ' ')))
  };
  return (
    <button
      className="mt-4 disabled:ring-none  disabled:bg-gray-800 bg-gray-900 hover:bg-gray-800 ring-4 ring-white/5 hover:ring-[#cb6ce6] 
                  text-lg rounded-xl py-1 px-3 flex items-center gap-x-3 justify-center text-white w-48 mx-auto mb-6"
      onClick={() => fetchQueryResponse()}
    >
      Translate to SQL
    </button>
  );
};

export default GenerateQueryButton;
