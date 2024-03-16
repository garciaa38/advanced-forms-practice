import { useQuestionContext } from "../../../context/QuestionContext";

export default function QuestionTwo() {
  const { questionTwo, setQuestionTwo } = useQuestionContext();

  return (
    <div>
      <p>Are you planning to use this tool?</p>
      <input
        onChange={() => {
          setQuestionTwo("Yes");
        }}
        id="a1"
        type="radio"
        checked={questionTwo === "Yes"}
      />
      <label htmlFor="a1">Yes</label>
      <input
        onChange={() => {
          setQuestionTwo("No");
        }}
        id="a2"
        type="radio"
        checked={questionTwo === "No"}
      />
      <label htmlFor="a2">No</label>
      <input
        onChange={() => {
          setQuestionTwo("Don't Know");
        }}
        id="a3"
        type="radio"
        checked={questionTwo === "Don't Know"}
      />
      <label htmlFor="a3">{`Don't Know`}</label>
    </div>
  );
}
