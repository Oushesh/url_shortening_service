import React, { useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import FAQ from './FAQ';
import Capabilities from './Capabilities';

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

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Call the API with the longUrl and shortUrl values
    const apiEndpoint = 'https://your-api-endpoint.com';
    const requestData = {
      longUrl,
      shortUrl,
    };

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
          {/* Rest of the code */}

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

              {/* Rest of the code */}
            </div>
            {/* Rest of the code */}
          </div>
        </main>
      </div>
      {/* Rest of the code */}
    </>
  );
}
