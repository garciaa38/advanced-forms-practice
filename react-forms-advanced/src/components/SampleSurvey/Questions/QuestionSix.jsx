import { useQuestionContext } from "../../../context/QuestionContext";
export default function QuestionSix() {
  const { setQuestionSix } = useQuestionContext();

  return (
    <>
      <label htmlFor="q6">Additional Feedback</label>
      <input
        id="q6"
        type="text"
        onChange={(e) => {
          setQuestionSix(e.target.value);
        }}
      />
    </>
  );
}
