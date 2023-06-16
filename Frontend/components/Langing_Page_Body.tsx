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

    // API call code...
  };

  // Rest of the code...
}
