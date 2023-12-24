const OpenAI = require("openai");  //OpenAI is imported to interact with OpenAI API
const getWeather = require("./weather");  //getWeather is a local module to fetch weather data 
require('dotenv').config();

const openai = new OpenAI({apiKey: process.env.OPEN_AI_KEY});  // An instance of OpenAI is created to interact with OpenAI API

const weatherSpecs = {
    "name": "weather",
    "description": "Get the current weather for a city",
    "parameters": {
        "type": "object",
        "properties": {
            "city": {
                "type": "string",
                "description": "The city",
            },
        },
        "required": ["city"],
    },
};   // This is a specification for a function called weather. It defines the expected input parameters 

async function fetchData(messages) {
    try {
        const { choices } = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages,
            functions: [weatherSpecs],
        });   // This line makes an API call to OpenAI's model and sends a series of messages as input, including a function specification for weatherSpecs.

        const responseMessage = choices[0].message;  // This stores the reponse 
        console.log("Got response:", responseMessage);
        messages.push(responseMessage);

        if (responseMessage.function_call?.name === 'weather') {
            const { city } = JSON.parse(responseMessage.function_call.arguments);
            console.log("GPT asked me to call getWeather for city:", city);
            messages.push({ role: "function", name: "getWeather", content: JSON.stringify(await getWeather(city)) });
        }   // It checks if the response indicates a function call to weather. If true, it extracts the city from the function call arguments.

        if (choices[0].finish_reason !== 'stop') 
            await fetchData(messages);
        else 
            console.log("Final message:", messages);

    } catch (error) {
        console.error('Error:', error);
    }
}

// Initialize with an initial set of messages
fetchData([
    { role: "system", content: "You give very short answers" },
    { role: "user", content: "What clothes should I wear today depending on the weather in Aurangabad?" }
]);
