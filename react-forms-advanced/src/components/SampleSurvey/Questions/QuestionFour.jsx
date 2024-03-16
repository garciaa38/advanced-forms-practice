import { useQuestionContext } from "../../../context/QuestionContext";
export default function QuestionFour() {
  const { setQuestionFour } = useQuestionContext()

  return (
    <>
      <label htmlFor="q4">What is your first name?</label>
      <input
        id="q4"
        type="text"
        onChange={(e) => {
          setQuestionFour(e.target.value);
        }}
      />
    </>
  );
}
