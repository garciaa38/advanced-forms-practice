import { useQuestionContext } from "../../../context/QuestionContext";
export default function QuestionFive() {
  const { setQuestionFive } = useQuestionContext()

  return (
    <>
      <label htmlFor="q5">What is your email address?</label>
      <input
        id="q5"
        type="text"
        onChange={(e) => {
          setQuestionFive(e.target.value);
        }}
      />
    </>
  );
}
