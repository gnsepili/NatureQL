import React from 'react'

const InputBox = ({setMessage}) => {
  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  return (
    <div className="bg-gray-800  rounded-lg px-4 py-6">
      <textarea
        type="text"
        className="w-full h-36 bg-gray-700 px-4 py-6 text-white rounded-lg  outline-none focus:ring-2 focus:ring-purple-500"
        placeholder="Input Query"
        onChange={handleChange}
      />
    </div>
  )
}

export default InputBox