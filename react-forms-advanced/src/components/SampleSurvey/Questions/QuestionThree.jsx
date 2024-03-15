import { useState } from "react";

export default function QuestionThree() {
    const [questionThree, setQuestionThree] = useState('');

    return (
        <div>
            <p>
            Why or Why Not?
            </p>
            <textarea onChange={e => setQuestionThree(e.target.value)}/>
        </div>
    )
}