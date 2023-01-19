"use client";
import React from "react";
import useSpeechToText from "react-hook-speech-to-text";

const stt = (props: any) => {
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });

  if (error) return <p>Web Speech API is not available in this browser 🤷‍</p>;

  return (
    <div className="pt-20">
      <div>
        <h1>Recording: {isRecording.toString()}</h1>
        <button onClick={isRecording ? stopSpeechToText : startSpeechToText}>
          {isRecording ? "Stop Recording" : "Start Recording"}
        </button>
        <ul>
          {results.map((result) => (
            <li key={result.timestamp}>{result.transcript}</li>
          ))}
          {interimResult && <li>{interimResult}</li>}
        </ul>
      </div>
    </div>
  );
};

export default stt;
