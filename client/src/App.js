import React, { useState } from "react";
import "./App.css";
import OutputBox from "./Components/OutputBox";
import InputBox from "./Components/InputBox";
import DBSchemaBox from "./Components/DBSchemaBox";
import GenerateQueryButton from "./Components/GenerateQueryButton";
import Header from "./Components/NavBar";
const App = () => {
  const [response, setResponse] = useState("");
  const [message, setMessage] = useState("")
  const [dbSchema, setDbSchema] = useState("")
  
  return (
    <>
    <Header/>
    <div className="h-screen -mt-8 bg-gradient-to-b from-blue-900 to-purple-800">
      <div className="grid grid-cols-2 gap-5 mt-8 px-4 py-6">
        <InputBox setMessage = {setMessage} />
        <OutputBox response={response} />
      </div>
      <GenerateQueryButton setResponse={setResponse} inputMessage={message} DBSchema = {dbSchema}/>
      <DBSchemaBox  setDbSchema = {setDbSchema}/>
    </div>
    </>
  );
};

export default App;
