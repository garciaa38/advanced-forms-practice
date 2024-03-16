import { useEffect, useState } from "react";
import QuestionOne from "./Questions/QuestionOne";
import QuestionTwo from "./Questions/QuestionTwo";
import QuestionThree from "./Questions//QuestionThree";
import QuestionFour from "./Questions/QuestionFour";
import QuestionFive from "./Questions/QuestionFive";
import QuestionSix from "./Questions/QuestionSix";
import { useQuestionContext } from "../../context/QuestionContext";

function SampleSurvey() {
  const [validationErrors, setValidationErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const {
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
  } = useQuestionContext();

  useEffect(() => {
    const errors = {};
    if (!questionOne) errors.q1 = "answer meee bitchhh";
    if (!questionTwo) errors.q2 = "speak up fool";
    if (!questionThree) {
      errors.q3 = "its awful quiet in here";
    } else if (questionThree.length > 250) {
      errors.q3 = "you're a real talker, aren't you?";
    }
    if (questionFour) {
      if (questionFour.length > 25) errors.q4 = "ur name too lonk";
    }
    if (questionFive) {
      if (!questionFive.includes("@")) {
        errors.q5 = "this is for an email";
      } else if (!questionFive.split("@")[1].includes(".")) {
        errors.q5 = "this is for an email";
      } else if (questionFive.length > 100) {
        errors.q5 = "ur email is very large. too large even. maek new";
      }
    }
    if (questionSix) {
      if (questionSix.length > 500) errors.q6 = "L2Summarize";
    }

    setValidationErrors(errors);
  }, [
    questionOne,
    questionTwo,
    questionThree,
    questionFour,
    questionFive,
    questionSix,
    otherQuestion,
  ]);

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const userRes = {
      questionOne,
      questionTwo,
      questionThree,
      questionFour,
      questionFive,
      questionSix,
      otherQuestion,
      submittedOn: new Date(),
    };
    console.log(userRes)
    if (!validationErrors) {
      setQuestionOne(null);
      setQuestionTwo(null);
      setQuestionThree(null);
      setQuestionFour(null);
      setQuestionFive(null);
      setQuestionSix(null);
      setOtherQuestion(false);
      setSubmitted(false);
    }
  };
  return (
    <div>
      <h2>Complete this Sample Survey!</h2>
      <form onSubmit={onSubmit}>
        <div className="errors">
          {validationErrors.q1 && submitted && `*${validationErrors.q1}`}
        </div>
        <QuestionOne />
        <div className="errors">
          {validationErrors.q2 && submitted && `*${validationErrors.q2}`}
        </div>
        <QuestionTwo />
        <div className="errors">
          {validationErrors.q3 && submitted && `*${validationErrors.q3}`}
        </div>
        <QuestionThree />
        <h3>Please let us know how to connect with you.</h3>
        <div className="errors">
          {validationErrors.q4 && submitted && `*${validationErrors.q4}`}
        </div>
        <QuestionFour />
        <div className="errors">
          {validationErrors.q5 && submitted && `*${validationErrors.q5}`}
        </div>
        <QuestionFive />
        <div className="errors">
          {validationErrors.q6 && submitted && `*${validationErrors.q6}`}
        </div>
        <QuestionSix />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SampleSurvey;
