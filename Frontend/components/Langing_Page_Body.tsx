import React, { useState } from 'react';
import Image from 'next/image';
import FAQ from './FAQ';
import Capabilities from './Capabilities';

export default function LandingPageBody() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    'note taking',
    'customer support',
    'team tasks',
    'to-dos',
    'project management',
  ];

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <main className="flex flex-col justify-center items-center">
          <div className="space-y-1 flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold justify-center">
              Save time and
            </h1>
            <h1 className="text-4xl font-bold justify-center">
              boost productivity in
            </h1>

            <div className="text-4xl text-[#075985]">
              {' '}
              <span className="font-bold">{items[currentIndex]}</span>.
            </div>
          </div>

          <div className="mt-8 text-m text-semi-bold">
            AI Assistant that integrates with any software to
          </div>

          <div className="text-m text-semi-bold">perform tasks on your behalf</div>
          
          {/* Add the form fields here */}
          <div className="mt-3">
            <div className="flex flex-col space-y-5">
              <form>
                <input
                  type="text"
                  name="short_url"
                  placeholder="Short URL"
                  className="text-xl flex items-center p-4 rounded-full cursor-pointer bg-white hover:bg-slate-200 w-full text-gray-700"
                />
                <input
                  type="text"
                  name="long_url"
                  placeholder="Long URL"
                  className="text-xl flex items-center p-4 rounded-full cursor-pointer bg-white hover:bg-slate-200 w-full text-gray-700"
                />
              </form>

              <a href="https://openai.com/product/gpt-4">
                <div className="text-xl flex items-center p-4 rounded-full cursor-pointer bg-zinc-700 hover:bg-zinc-800">
                  <div className="bg-green-400 rounded-lg">
                    <Image
                      src="/icons/GPT-4.png"
                      width={30}
                      height={30}
                      className=""
                      alt={''}
                    />
                  </div>
                  Powered by GPT-4
                </div>
              </a>

              {/* Rest of the code */}
              <a href="/Try_for_Free">
                <div className="justify-center text-xl flex items-center p-4 rounded-lg cursor-pointer bg-white hover:bg-slate-200 w-full text-gray-700">
                  Try for Free*
                </div>
              </a>

              <a
                href="https://calendly.com/oushesh/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="justify-center flex text-xl w-full px-4 py-2 text-zinc-200 bg-zinc-900 border-[1px] border-zinc-700 focus:bg-slate-200 rounded-tl-full rounded-bl-full rounded-br-full rounded-tr-full focus:outline-none focus:ring-[1px] focus:ring-sky-500 placeholder:text-zinc-400">
                  <Image
                    src="/icons/calendar.svg"
                    width={30}
                    height={30}
                    className=""
                    alt={''}
                  />
                  Request Demo
                </div>
              </a>
            </div>
            * No cards required for Trial
          </div>

          {/* Rest of the code */}
          <div className="mt-20 space-y-1">
            <h1 className="text-4xl font-bold">Productivity</h1>
          </div>
          <div className="space-y-5 flex">
            <h1 className="text-4xl font-bold">without maintenance</h1>
          </div>
        </main>

        <div className="space-x-3 space-y-0.5 flex">
          Talk to Real Estate Bot on:
          <Image
            src="/icons/notion.png"
            width={30}
            height={30}
            className=""
            alt={''}
          />
          <Image
            src="/icons/mail_contact.png"
            width={30}
            height={30}
            className=""
            alt={''}
          />
          <Image
            src="/icons/telegram.png"
            width={30}
            height={30}
            className=""
            alt={''}
          />
          <Image
            src="/icons/whatsapp.png"
            width={30}
            height={30}
            className=""
            alt={''}
          />
        </div>
      </div>
      <div className="space-y-[10px]">
        <Capabilities />
      </div>
      <div className="space-y-[10px]">
        <FAQ />
      </div>
    </>
  );
}
