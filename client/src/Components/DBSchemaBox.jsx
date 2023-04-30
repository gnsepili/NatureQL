import React from 'react'

const DBSchemaBox = ({setDbSchema}) => {
  const handleChange = (event) => {
    setDbSchema(event.target.value);
  };
  return (
<div className="bg-gray-800 w-[70%] mx-auto rounded-xl px-4 py-6">
      <textarea
        type="text"
        className="w-full h-36 bg-gray-700 px-4 py-6 text-white rounded-lg  outline-none focus:ring-2 focus:ring-purple-500"
        placeholder="Type here"
        onChange={handleChange}
      />
    </div>  )
}

export default DBSchemaBox