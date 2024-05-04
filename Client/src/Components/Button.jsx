import React from 'react'
import {Link} from "react-router-dom"

function Button() {
  return (
    <div className="flex justify-end pt-2 space-x-14 active:cursor-wait">
    <button className="px-4 bg-gray-200 p-3 rounded text-black hover:bg-gray-300 font-semibold">
      <Link to={"/home"}>Cancel</Link>
    </button>

    <button
      type="submit"
      className="px-4 bg-blue-500 p-3 ml-3 rounded-lg text-white hover:bg-teal-400"
    >
      Confirm
    </button>
  </div>
  )
}

export default Button