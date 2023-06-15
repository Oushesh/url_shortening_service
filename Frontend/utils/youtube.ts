//API to fetch youtube videos
import { NextApiRequest, NextApiResponse } from 'next';


export default async (req: NextApiRequest, res: NextApiResponse) => {
  const key: string = process.env.YOUTUBE_KEY as string;
  const response = await fetch('https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCLMdmCCRFGWt7rktx6tMErw&key=' + key);
  const json = await response.json();
  const { subscriberCount, viewCount, videoCount } = json.items[0].statistics;
  return res.status(200).json({
    subscriberCount,
    viewCount,
    videoCount
  });
};

//get this working for fetching the youtube data
