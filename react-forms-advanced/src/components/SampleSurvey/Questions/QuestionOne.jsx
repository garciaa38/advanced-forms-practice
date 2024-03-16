import { useQuestionContext } from "../../../context/QuestionContext";

export default function QuestionOne() {
  const { otherQuestion, setOtherQuestion, questionOne, setQuestionOne } = useQuestionContext();

  return (
    <div>
      <p>What is your reason for considering a survey?</p>
      <input
        onChange={() => {
          setQuestionOne("Employee Engagement");
          setOtherQuestion(false);
        }}
        id="a1"
        type="radio"
        checked={questionOne === "Employee Engagement"}
      />
      <label htmlFor="a1">Employee Engagement</label>

      <input
        onChange={() => {
          setQuestionOne("Team Dynamics");
          setOtherQuestion(false);
        }}
        id="a2"
        type="radio"
        value="Team Dynamics"
        checked={questionOne === "Team Dynamics"}
      />
      <label htmlFor="a2">Team Dynamics</label>

      <input
        onChange={() => {
          setQuestionOne("Student Safety");
          setOtherQuestion(false);
        }}
        id="a3"
        type="radio"
        value="Student Safety"
        checked={questionOne === "Student Safety"}
      />
      <label htmlFor="a3">Student Safety</label>

      <input
        onChange={() => {
          setQuestionOne("Parent Involvement in Schooling");
          setOtherQuestion(false);
        }}
        id="a4"
        type="radio"
        value="Parent Involvement in Schooling"
        checked={questionOne === "Parent Involvement in Schooling"}
      />
      <label htmlFor="a4">Parent Involvement in Schooling</label>

      <input
        onChange={() => {
          setOtherQuestion(true);
          setQuestionOne(null);
        }}
        id="other"
        type="radio"
        value="Other"
        checked={otherQuestion}
      />
      <input
        onChange={(e) => setQuestionOne(e.target.value)}
        id="other"
        type="text"
      />
      <label htmlFor="other">Other</label>
    </div>
  );
}
