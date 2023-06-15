import { NextApiRequest, NextApiResponse } from "next";

const fetchMessages = async (username: string): Promise<string> => {
  try {
    const response = await fetch(
      `https://d-sinclair-gpt.herokuapp.com/api/dataconnectors/twitter?username=${username}`
    );
    const data = await response.json();
    return data.text;
  } catch (error) {
    console.error("Error fetching messages:", error);
    return "";
  }
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const username = "davidasinclair";
  const text = await fetchMessages(username);
  res.status(200).json({ text });
};

export default handler;
