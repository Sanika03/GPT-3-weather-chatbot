# GPT-3-weather-chatbot

A weather chatbot using OpenAI's GPT-3.5 Turbo model with dynamic function calling for real-time weather data retrieval.

## Overview

This repository contains an API for real-time weather data retrieval using OpenAI's GPT-3.5 Turbo model. The API is built with Node.js and includes integration with Weatherstack API.

## Features

- Utilizes OpenAI for intelligent content creation and dynamic function calling.
- Integrates seamlessly with WeatherStack API for real-time weather data retrieval.
- Powered by Node.js for a robust and scalable backend.

## Setup

### Prerequisites

Before running the application, make sure you have the following installed:

- Node.js
- OpenAI API key
- WeatherStack API key

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/GPT-3-weather-chatbot.git

2. Navigate to the project directory:

   ```bash
   cd GPT-3-weather-chatbot

3. Install dependencies:

   ```bash
   npm install

4. Create a .env file in the project root and add your API keys:

   ```bash
   OPEN_AI_KEY=your_openai_api_key
   WEATHER_API_KEY=your_weatherstack_api_key

## Usage

  Run the application with the following command:
    
     node index.js

The chatbot responds to weather-related queries, making intelligent use of OpenAI for function calling and fetching real-time weather data from WeatherStack API.

## Sample Conversations

- User: "What is the temperature in Paris right now?"\
  The chatbot fetches and responds with the current temperature.

- User: "Is it raining in London?" \
  The chatbot checks real-time weather conditions and provides the latest information.

## Notes
- Ensure proper API key management and security practices.
- Customize the chatbot for specific weather-related inquiries or enhancements.

Feel free to explore and enhance this weather chatbot for your use case. If you have any questions or improvements, please submit an issue or pull request.
