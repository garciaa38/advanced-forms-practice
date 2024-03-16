import { createContext, useContext, useState } from "react";

export const QuestionContext = createContext();

export const useQuestionContext = () => useContext(QuestionContext);

export default function QuestionProvider({ children }) {
  const [questionOne, setQuestionOne] = useState(null);
  const [questionTwo, setQuestionTwo] = useState(null);
  const [questionThree, setQuestionThree] = useState(null);
  const [questionFour, setQuestionFour] = useState(null);
  const [questionFive, setQuestionFive] = useState(null);
  const [questionSix, setQuestionSix] = useState(null);
  const [otherQuestion, setOtherQuestion] = useState(false);
  return (
    <QuestionContext.Provider
      value={{
        questionOne,
        setQuestionOne,
        questionTwo,
        setQuestionTwo,
        questionThree,
        setQuestionThree,
        questionFour,
        setQuestionFour,
        questionFive,
        setQuestionFive,
        questionSix,
        setQuestionSix,
        otherQuestion,
        setOtherQuestion,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
}
