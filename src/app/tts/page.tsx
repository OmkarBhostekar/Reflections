'use client'
import React, { Component } from 'react'
import parse from 'html-react-parser'
// import Speech from 'react-speech';
import { TextToSpeech, useTts } from 'tts-react'
import type { TTSHookProps } from 'tts-react'
const html = '<ul><li>This method allows you to register an input or select element and apply validation rules to React Hook Form. Validation rules are all based on the HTML standard and also allow for custom validation methods.</li><li></li><li>two</li><li>three</li></ul>'

type SpeakProps = Pick<TTSHookProps, 'children'>

const Speak = ({ children }: SpeakProps) => (
  <>{useTts({ children, autoPlay: true }).ttsChildren}</>
)

const page = () => {

  return (
    <div className='pt-20'>
        <h1>Text to Speech</h1>
        <TextToSpeech markTextAsSpoken>{parse(html)}</TextToSpeech>
    </div>
  )
}

export default page

// var voices = window.speechSynthesis.getVoices();

// var sayit = function ()
// {
//     var msg = new SpeechSynthesisUtterance();

//     msg.voice = voices[10]; // Note: some voices don't support altering params

//     msg.volume = 1; // 0 to 1
//     msg.rate = 1; // 0.1 to 10
//     msg.pitch = 2; //0 to 2
//     msg.lang = 'en-GB';
//     msg.onstart = function (event) {

//         console.log("started");
//     };
//     msg.onend = function(event) {
//         console.log('Finished in ' + event.elapsedTime + ' seconds.');
//     };
//     msg.onerror = function(event)
//     {

//         console.log('Errored ' + event);
//     }
//     msg.onpause = function (event)
//     {
//         console.log('paused ' + event);

//     }
//     msg.onboundary = function (event)
//     {
//         console.log('onboundary ' + event);
//     }

//     return msg;
// }


// var speekResponse = function (text: string)
// {
//     speechSynthesis.cancel(); // if it errors, this clears out the error.

//     var sentences = text.split(".");
//     for (var i=0;i< sentences.length;i++)
//     {
//         var toSay = sayit();
//         toSay.text = sentences[i];
//         speechSynthesis.speak(toSay);
//     }
// }