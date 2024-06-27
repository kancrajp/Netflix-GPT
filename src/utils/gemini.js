import { GoogleGenerativeAI } from "@google/generative-ai";

// Fetch your API_KEY
const API_KEY = GEMINI_KEY;
// Reminder: This should only be for local testing

// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(API_KEY);

// The Gemini 1.5 models are versatile and work with most use cases
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function run() {
  // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = "Write a story about a magic backpack.";

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

run();

{
  /* import { GoogleGenerativeAI } from "@google/generative-ai";
  
  const model = GoogleGenerativeAI.getGenerativeModel({
    model: "gemini-1.5-flash-latest",
    url: `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${GEMINI_KEY}`;
      method: "post";
      data: {
        contents: [
          {
            role: "user",
            parts: [{ text: gptQuery }],
          },
        ];
      }
  });
  */
}
