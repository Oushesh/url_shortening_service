import React from 'react'
import Image from 'next/image'
import {AiOutlineArrowDown} from 'react-icons/ai'

function Capabilities() {
  return (
    <>
    <div className="flex justify-center text-bold text-4xl">
        Capabilities
    </div>
    <div className="mx-20  flex text-[#059669]">
        01
    </div>
   
  <div className="flex justify-center text-4xl text-bold">
    Effortlessly create info
  </div>
  
  <div className="flex justify-center text-4xl text-bold">
    to your workspace
  </div>

  <div className="bg-slate-900 bg-opacity-30 flex mx-auto w-3/4 flex-col items-center justify-center space-y-3">
    <div className="text-sm space-x-1 bg-slate-600 p-2 w-2/3 mx-auto flex flex-items flex-col justify-center rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-bl-xl">
      <Image
          src="/icons/whatsapp.png"
          width={25}
          height={25}
          className=""
          alt={''}
       />
       whatsapp
       <div>
      @RealEstateBot Send the house Images from our visit in La Gaulette to Lea's Dashboard.
      </div>
    </div>
    <AiOutlineArrowDown size={50}/>
    <div className="space-x-1 bg-slate-600 p-2 w-2/3 mx-auto flex flex-col justify-center rounded-tl-lg rounded-bl-lg rounded-tr-lg rounded-br-lg">
      <div className="text-sm flex flex-items text-grey-800">
        <Image
            src="/icons/Hints_AI_Assistant.png"
            width={25}
            height={25}
            className=""
            alt={''}
          />
        AI Assistant
      </div>
      <div className="text-sm">
        @RealEstateBot Pictures sent to Lea's Dashboard. How can I help you further?
      </div>
      </div>

      <div className="flex justify-center">
        You're done! I've sent the summary of this article to your Notion.
      </div>
    </div>

    
    <div className="mx-20  flex text-[#737373]">
        02
    </div>
   
  <div className="flex justify-center text-4xl text-bold">
    Reply to the message to 
  </div>
  
  <div className="flex justify-center text-4xl text-bold">
    add a comment
  </div>

  <div className="bg-slate-900 bg-opacity-30 flex mx-auto w-3/4 flex-col items-center justify-center space-y-3">
    <div className="text-sm space-x-1 bg-slate-600 p-2 w-2/3 mx-auto flex flex-items flex-col justify-center rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-bl-xl">
      <Image
          src="/icons/sms.png"
          width={500}
          height={500}
          className=""
          alt={''}
       />
       Discuss this listing with the North GrandBaie Team
    </div>
    <AiOutlineArrowDown size={50}/>
    <div className="space-x-1 bg-slate-600 p-2 w-2/3 mx-auto flex flex-col justify-center rounded-tl-lg rounded-bl-lg rounded-tr-lg rounded-br-lg">
      <div className="text-sm flex flex-items text-grey-800">
        <Image
            src="/icons/Hints_AI_Assistant.png"
            width={25}
            height={25}
            className=""
            alt={''}
          />
        
      </div>
      <div className="text-sm">
        @RealEstateBot The comment was successfully added!
      </div>
      </div>

      <div className="flex justify-center">
        You're done! I've sent the summary of this article to your Notion.
      </div>

    </div>

    <div className="mx-20  flex text-[#3730a3]">
        03
    </div>
   
  <div className="flex justify-center text-4xl text-bold">
    Update any Notion 
  </div>
  
  <div className="flex justify-center text-4xl text-bold">
    Property
  </div>

  <div className="bg-slate-900 bg-opacity-30 flex mx-auto w-3/4 flex-col items-center justify-center space-y-3">
    <div className="text-sm space-x-1 bg-[#4f46e5] bg-opacity-20 p-2 w-2/3 mx-auto flex flex-items flex-col justify-center rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-bl-xl">
      <Image
          src="/icons/telegram.png"
          width={25}
          height={25}
          className=""
          alt={''}
       />
       Happy with Client Visit. Move ticket meeting client: Oushesh Haradhun
       to "Done"
    </div>
    <AiOutlineArrowDown size={50}/>
    <div className="space-x-1 bg-[#4f46e5] bg-opacity-20 p-2 w-2/3 mx-auto flex flex-col justify-center rounded-tl-lg rounded-bl-lg rounded-tr-lg rounded-br-lg">
      <div className="text-sm flex flex-items text-grey-800">
        <Image
            src="/icons/Hints_AI_Assistant.png"
            width={25}
            height={25}
            className=""
            alt={''}
          />
        
      </div>
      <div className="text-sm">
        @RealEstateBot Your card was moved to "Done" stage!
      </div>
      </div>

      <div className="flex justify-center">
        You're done! I've sent the summary of this article to your Notion.
      </div>

    </div>
  </>
  )
}
export default Capabilities;
