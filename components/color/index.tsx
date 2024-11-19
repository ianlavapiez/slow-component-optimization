"use client";

import React, { useEffect, useState } from "react";
import { generateColor } from "@/lib";
import ColorPreview from "./colorPreview";
import ColorInput from "./colorInput";
import ColorGuessStatus from "./colorGuessStatus";
import SlowComponent from "../slow-component";

const Color: React.FC = () => {
  const [colorGuess, setColorGuess] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState(generateColor());
  const [hasGuessed, setHasGuessed] = useState(false);
  const [isWinner, setIsWinner] = useState(false);

  useEffect(() => {
    if (hasGuessed) {
      if (correctAnswer === colorGuess) {
        setIsWinner(true);
      }
    }
  }, [correctAnswer, colorGuess, hasGuessed]);

  // NOTE: For you to check if you typed the correct answer accepts true
  console.log("correctAnswer", correctAnswer);

  return (
    <main className="mx-auto my-8 flex w-96 flex-col gap-8">
      <ColorPreview color={correctAnswer} />
      <ColorInput
        value={colorGuess}
        onChange={(e) => setColorGuess(e.target.value)}
        onSubmit={() => setHasGuessed(true)}
        disabled={hasGuessed}
      />
      <ColorGuessStatus isWinner={isWinner} hasGuessed={hasGuessed} />
      <SlowComponent />
      <button
        onClick={() => {
          setCorrectAnswer(generateColor());
          setHasGuessed(false);
          setColorGuess("");
        }}
        type={hasGuessed ? "submit" : "button"}
      >
        Reset Color
      </button>
    </main>
  );
};

export default Color;
