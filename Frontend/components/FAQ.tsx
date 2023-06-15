import React from 'react'

function FAQ() {
  return (
    <div className="flex flex-col justify-center">
    <div className="text-[#075985] flex justify-center">
        FAQ
    </div>
    <h1 className="flex justify-center text-4xl font-bold">
          Got questions? 
    </h1>
    <p className="flex justify-center">
        If you have any other questions - please get in touch at: 
    </p>
    <div className="flex justify-center space-x-1 text-zinc-500 hover:text-[#075985]">
    <a href="mailto:oushesh@gmail.com" className="text-[#075985] underline">
      Contact me
    </a>
      
    </div>
    </div>
  )
}

export default FAQ