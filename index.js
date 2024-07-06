// this is basically javascript so lets write normal javascript code4const { GoogleGenerativeAI } = require("@google/generative-ai");
const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
const run = async (txt) => {
    const prompt = `translate this text to hindi - ${txt}`
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
}

  
  run('hi my name is abhishek');