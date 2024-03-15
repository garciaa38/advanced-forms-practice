import { useState, useEffect } from 'react';
import Data from './sampleSurveyData';
import QuestionOne from './Questions/QuestionOne';
import QuestionTwo from './Questions/QuestionTwo';
import QuestionThree from './Questions/QuestionThree';


function SampleSurvey() {
    const [questionOne, setQuestionOne] = useState(null);
    const [questionTwo, setQuestionTwo] = useState(null);
    const [questionThree, setQuestionThree] = useState('');
    const [questionFour, setQuestionFour] = useState('');
    const [questionFive, setQuestionFive] = useState('');
    const [questionSix, setQuestionSix] = useState('');
    const [questionSeven, setQuestionSeven] = useState('');
    const [otherQuestion, setOtherQuestion] = useState(false);



    console.log(Data);
    return(
        <div>
            <h2>Complete this Sample Survey!</h2>
            <form>
                <QuestionOne />
                <QuestionTwo />
                <QuestionThree />
                <h3>Please let us know how to connect with you.</h3>
                
            </form>
        </div>
    )

} 

export default SampleSurvey;