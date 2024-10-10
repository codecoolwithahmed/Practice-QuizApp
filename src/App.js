import React, { useState } from "react";
import questions from "./questions";

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  
  
  const handleNextQuestion = () => {
    if (currentQuestion < questions.length -1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6">Quiz App</h1>
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">
            {questions[currentQuestion].question}
          </h2>
          <div className="flex flex-col gap-3">
            {questions[currentQuestion].options.map((e, i) => (
              <label
                key={i}
                className="flex items-center space-x-2 bg-gray-100 p-3 rounded-md hover:bg-gray-200 cursor-pointer"
              >
                <input type="radio" name={`question-${currentQuestion}`} className="form-radio h-5 w-5 text-indigo-600" />
                <span className="text-gray-700">{e}</span>
              </label>
            ))}
          </div>
        </div>
        <button
          className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded hover:bg-indigo-700"
          onClick={handleNextQuestion}
        >
          {currentQuestion < questions.length - 1 ? "Next" : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default App;
