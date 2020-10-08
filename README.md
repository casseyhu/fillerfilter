# fillerfilter
Simple web application to help improve public speaking by understanding how often you use filler words

## Inspiration
When it comes to giving a speech or presentation, many people tend to include one too many filler words such as "um, uh, like, so, basically, actually, ..." which in turn degrades the effectiveness of their speech. Given the current state of the pandemic, interviews and presentations are now all conducted through the internet rather than in person so we can no longer gather people to provide feedback. To solve this problem, we have developed a web application that allows users to record their speech while displaying common word statistics in real-time -- all at the hands of your own computer.

## Technologies
Built With:
* react
* javascript
* html
* css
* scss

## Setup
To run this project, install it locally using npm:
```
$ cd ../fillerfilter
$ npm install
$ npm start
```
To use this application, users must allow microphone permission to record audio.

## What it does
When the user first opens the website, they are welcomed with an animated title screen.
![Entry Page](https://media.giphy.com/media/u3CaQPzDQ9wUdtfrXR/giphy.gif)
On the main webpage, users have the options to start, stop, and reset the current recording at the bottom navigation bar. 
#### Features (Real-Time Updates)
* **Live transcript**: As the user speaks into the mic, live transcript is generated from using a Web Speech API. 
* **Words per minute (wpm)**: Running average of words spoken per minute during the recording time frame.
* **Top 10 common filler words**: Pie chart depicting usage of the 21 common filler words located in FillerWords.js.
* **Top 10 common words used**: Table depicting the frequency count for the top 10 most common words used during the speech.
* **Speech visualizer**: Generates an animated imagery that follows the frequency spectrum of the users voice.
![Sample Session](https://media.giphy.com/media/tNTJtJkcxglfowYoVS/giphy.gif)

## How we built it
Our application is mainly built upon **react-speech-recognition** -- a react hook that converts speech from the users microphone to text. 
The backend part of this project was to extract and break down the results into useful components that could be delivered live to the user on the screen. 
The frontend portion of this project dealt mainly with providing a sleek user interface that is easy to use and pleasing to the eye.

## What's next for fillterfilter
The next step is to implement more functionalities such as:
* Improve backend data processing. For example, distinguishing the meaning of `like` in the sentences `"I like to cook"` and `"Cooking is a hobby but like..."`.
* Provide users tips on how they can impove their speech.
* Allow users to save recording to go over later.
* Develop a ranking system where users are given a score based on quality of speech and use of common filler words.

