import React, { createContext, useContext, useState } from "react";

const EmojiContext = createContext();

export function EmojiProvider({ children }) {
  const [array, setArray] = useState([
    "The shape of this person's face is",
    "(round)",
    "the shape of his eyes is",
    "(round eyes)",
    "and the shape of his nose is",
    "(high)",
    "and the shape of his lips is",
    "(heart-shaped)",
    "lips real person bald head",
  ]);

  return (
    <EmojiContext.Provider value={{ array, setArray }}>
      {children}
    </EmojiContext.Provider>
  );
}

export function useEmojiContext() {
  return useContext(EmojiContext);
}
