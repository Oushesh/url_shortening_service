import React from 'react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export interface APIResponse {
  short_url: string;
  long_url:string;
}

export default function LandingPageBody() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const [apiResponse, setApiResponse] = useState<APIResponse | null>(null);
  const [fetchOutput, setFetchOutput] = useState('');

  const handleLongUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLongUrl(event.target.value);
  };

  const handleShortUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setShortUrl(inputValue);
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const url = new URL('https://url-shortening-service-ol9j.vercel.app/encode_url');
    url.searchParams.append('url_input', shortUrl);
    console.log(url);
    try {
      const response = await fetch(url.toString(), {
        method: 'GET',
      });

      if (response.ok) {
        const data = await response.json();
        setApiResponse(data);
        setFetchOutput(JSON.stringify(data));
        console.log('Form input value inside the handleForm:', shortUrl); // Log the form input value here

        console.log('Response data:', data); // Add this line to log the response data
      } else {
        console.error('API request failed:', response.statusText);
      }
    } catch (error) {
      console.error('API request failed:', error);
    }
  };

  //Handle long form submit.
  const handleLongFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    const url = new URL('https://url-shortening-service-ol9j.vercel.app/decode_url');
    url.searchParams.append('short_url', longUrl);
  
    try {
      const response = await fetch(url.toString(), {
        method: 'GET',
      });
  
      if (response.ok) {
        const data = await response.json();
        setApiResponse(data);
        setFetchOutput(JSON.stringify(data));
        console.log('decoding input:',longUrl);

        console.log('Response data:', data); // Add this line to log the response data
      } else {
        console.error('API request failed:', response.statusText);
      }
    } catch (error) {
      console.error('API request failed:', error);
    }
  };
  

  const items = [
    'note taking',
    'customer support',
    'team tasks',
    'to-dos',
    'project management',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

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

          <div className="text-m text-semi-bold">
            perform tasks on your behalf
          </div>
          <div className="mt-3">
            <div className="flex flex-col space-y-5">
              <a href="https://openai.com/product/gpt-4">
                <div className="text-xl flex items-center p-4 rounded-full cursor-pointer bg-zinc-700 hover:bg-zinc-800">
                  <div className="bg-green-400 rounded-lg space-x-1">
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
              * No cards required for Trial
            </div>

            <div className="space-y-5">
              <div className="space-y-2">
                <form onSubmit={handleFormSubmit}>
                  <input
                    type="text"
                    name="short_url"
                    placeholder="Short URL"
                    className="text-xl flex items-center p-4 rounded-full cursor-pointer bg-white hover:bg-slate-200 w-full py-4 text-gray-700 text-center"
                    value={shortUrl}
                    onChange={handleShortUrlChange}
                  />

                  <button
                    type="submit"
                    className="text-xl flex items-center p-4 rounded-full cursor-pointer bg-zinc-700 hover:bg-zinc-800 w-full"
                  >
                    <Image
                      src="/icons/GPT-4.png"
                      width={30}
                      height={30}
                      className=""
                      alt={''}
                    />
                    GPT-4 Encoding
                  </button>
                </form>
              </div>
              <form onSubmit={handleLongFormSubmit}>
                <input
                  type="text"
                  name="long_url"
                  placeholder="Long URL"
                  className="text-xl flex items-center p-4 rounded-full cursor-pointer bg-white hover:bg-slate-200 w-full text-gray-700 text-center"
                  value={longUrl}
                  onChange={handleLongUrlChange}
                />
                <button
                  type="submit"
                  className="text-xl flex items-center p-4 rounded-full cursor-pointer bg-zinc-700 hover:bg-zinc-800 w-full"
                >
                  <Image
                    src="/icons/GPT-4.png"
                    width={30}
                    height={30}
                    className=""
                    alt={''}
                  />
                  GPT-4 Decoding
                </button>
              </form>
            </div>
          </div>

          {apiResponse && apiResponse.short_url && (
          <div className="justify-center bold text-xl flex-col items-center p-4 rounded-full cursor-pointer bg-zinc-800 hover:bg-zinc-900 w-full">
              <div className="items-center">
                <h3>Encoded URL:</h3>
              </div> 
              <div className="text-[#075985] items-center">
                    <p>https://wwww.short.com/{apiResponse.short_url}</p>
              </div>
          </div>
          )}

          {apiResponse && apiResponse.long_url && (
            <div className="bold text-xl flex items-center p-4 rounded-full cursor-pointer bg-zinc-800 hover:bg-zinc-900 w-full">
              <div className="items-center">
                <h3>Decoded URL: </h3>
              </div>
              <div className="text-[#075985] items-center">
                <p>{apiResponse.long_url}</p>
              </div>
            </div>
          )}

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
    </>
  );
}
