
import { useQuestionContext } from "../../../context/QuestionContext";
export default function QuestionThree() {
  const { setQuestionThree } = useQuestionContext();

  return (
    <div>
      <p>Why or Why Not?</p>
      <textarea onChange={(e) => setQuestionThree(e.target.value)} />
    </div>
  );
}
