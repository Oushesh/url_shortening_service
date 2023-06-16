import React, { useState } from 'react';
import Image from 'next/image';
import FAQ from './FAQ';

import axios from 'axios';

export default function LandingPageBody() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleLongUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLongUrl(event.target.value);
  };

  const handleShortUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShortUrl(event.target.value);
  };

  const handleFormSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    // Call the API with the longUrl and shortUrl values
    // You can use libraries like axios or fetch to make the API call
    // Replace the placeholders below with your actual API endpoint and data format

    const apiEndpoint = 'https://your-api-endpoint.com';
    const requestData = {
      longUrl,
      shortUrl,
    };

    // Example using axios library
    // Replace with your own API call implementation
    axios.post(apiEndpoint, requestData)
      .then((response) => {
        // Handle the API response
        console.log(response.data);
      })
      .catch((error) => {
        // Handle the API error
        console.error(error);
      });
  };

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
            <h1 className="text-4xl font-bold justify-center">Save time and</h1>
            <h1 className="text-4xl font-bold justify-center">boost productivity in</h1>

            <div className="text-4xl text-[#075985]">
              {' '}
              <span className="font-bold">{items[currentIndex]}</span>.
            </div>
          </div>

          <div className="mt-8 text-m text-semi-bold">AI Assistant that integrates with any software to</div>

          <div className="text-m text-semi-bold">perform tasks on your behalf</div>

          <div className="mt-3">
            <div className="flex flex-col space-y-5">
              <form onSubmit={handleFormSubmit}>
                <input
                  type="text"
                  name="short_url"
                  placeholder="Short URL"
                  className="text-xl flex items-center p-4 rounded-full cursor-pointer bg-white hover:bg-slate-200 w-full text-gray-700"
                  value={shortUrl}
                  onChange={handleShortUrlChange}
                />
                <input
                  type="text"
                  name="long_url"
                  placeholder="Long URL"
                  className="text-xl flex items-center p-4 rounded-full cursor-pointer bg-white hover:bg-slate-200 w-full text-gray-700"
                  value={longUrl}
                  onChange={handleLongUrlChange}
                />
                <button type="submit" className="justify-center flex text-xl w-full px-4 py-2 text-zinc-200 bg-zinc-900 border-[1px] border-zinc-700 focus:bg-slate-200 rounded-tl-full rounded-bl-full rounded-br-full rounded-tr-full focus:outline-none focus:ring-[1px] focus:ring-sky-500 placeholder:text-zinc-400">
                  <Image
                    src="/icons/calendar.svg"
                    width={30}
                    height={30}
                    className=""
                    alt={''}
                  />
                  Request Demo
                </button>
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

              <a href="/Try_for_Free">
                <div className="justify-center text-xl flex items-center p-4 rounded-lg cursor-pointer bg-white hover:bg-slate-200 w-full text-gray-700">
                  Try for Free*
                </div>
              </a>
            </div>
            * No cards required for Trial
          </div>
          {/* Rest of the code */}
        </main>
      </div>
      {/* Rest of the code */}
    </>
  );
}
