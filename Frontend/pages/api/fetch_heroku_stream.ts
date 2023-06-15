// Oushesh
import { Message } from "@/types";
import { OpenAIStream } from "@/utils";

export const config = {
  runtime: "edge",
};

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

const sendTextInStream = async (
  messages: string[],
  controller: ReadableStreamDefaultController<string>
) => {
  const lineDelay = 1000; // Adjust the delay (in milliseconds) between lines as needed
  const messageDelay = 2000; // Adjust the delay (in milliseconds) between messages as needed

  for (const message of messages) {
    const lines = message.split('\n');
    for (const line of lines) {
      await new Promise((resolve) => setTimeout(resolve, lineDelay));
      controller.enqueue(line + "\n");
    }
    // Add "..." and delay between messages
    await new Promise((resolve) => setTimeout(resolve, messageDelay));
    controller.enqueue("...\n\n");
  }
  controller.close();
};

const handler = async (req: Request): Promise<Response> => {
  try {
    // I need to pass those parameters
    const username = "SahilBloom";
    const text = await fetchMessages(username);

    const charLimit = 12000;
    let charCount = 0;
    let messagesToSend = "";

    for (const char of text) {
      if (charCount + 1 > charLimit) {
        break;
      }
      charCount++;
      messagesToSend += char;
    }

    // Split the fetched messages into separate messages based on a double newline
    const messages = messagesToSend.split('\n\n');

    // Create a ReadableStream to send messages in a stream
    const stream = new ReadableStream<string>({
      start(controller) {
        sendTextInStream(messages, controller);
      },
    });

    // Return a new response with the stream
    return new Response(stream, { headers: { "Content-Type": "text/plain" } });
  } catch (error) {
    console.log(error);
    return new Response("Error", { status: 500 });
  }
};

export default handler;
