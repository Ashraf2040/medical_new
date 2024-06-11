"use client";

import React, { useEffect, useRef } from "react";
import { Message, experimental_useAssistant as useAssistant } from "ai/react";

function QuestionCard({ question }) {
  const { status, messages, submitMessage, input, handleInputChange, error } =
    useAssistant({
      api: "/api/assistant",
    });

  const inputRef = useRef(null);
  useEffect(() => {
    if (status === "awaiting_message") {
      inputRef.current?.focus();
    }
 
  }, [status]);
  
  return (
    <div className="border-2 rounded-lg py-2  leading-6 font-semibold text-md cursor-pointer text-center ">
      <button onClick={() => submitMessage(question)}>{question}</button>
    </div>
  );
}

export default QuestionCard;
