import React, {useEffect, useState} from 'react';
import { useParams, useHistory } from "react-router-dom";
import '../styles/questionsStyle.css';

const QuestionsScreen = () => {
    const history = useHistory();
    const [questions, setQuestions] = useState([]);
    const [radioState, setRadioState] = useState('');
    const [points, setPoints] = useState(history.location.point.detail);
    const [page, setPage] = useState(0);
    let { id } = useParams();

    useEffect(() => {
        setQuestions(history.location.statex.detail);
    },[]);

    console.log(history.location.point.detail);

    useEffect(() => {
        console.log(questions);
    }, [questions]);

    const handleChange = (answer) => {
        setRadioState(answer);
        if(answer === questions[id].correct_answer) {
            setPoints(points+1);
        }
    }

    const nextQuestion = () => {
        setPage(page+1);
        history.push({
            pathname:'/question/' + page,
            statex: {detail: questions},
            point: {detail: points}
        });
    }

    const handleResult = () => {
        history.push({
            pathname:'/result',
            point: {detail: points}
        });
    }

    const Item = ({prop}) => {
        return(
          <div>
              <h3>{prop[id].category}</h3>
              <p>{prop[id].question.replace(/&amp;/g, '&')
                  .replace(/&lt;/ , '<')
                  .replace(/&gt;/, '>')
                  .replace(/&quot;/g,'"')
                  .replace(/&#039;/g,"'")}</p>
              {prop[id].incorrect_answers.map((answer) => (
                  <div style={{display: 'flex', alignItems: 'center'}}>
                      <input key={answer} type="radio" checked={radioState === answer} onClick={() => handleChange(answer)} value={answer}/>
                      <p>{answer.replace(/&amp;/g, '&')
                          .replace(/&lt;/ , '<')
                          .replace(/&gt;/, '>')
                          .replace(/&quot;/g,'"')
                          .replace(/&#039;/g,"'")}</p>
                  </div>
              ))}
              <div style={{display: 'flex', alignItems: 'center'}}>
                  <input type="radio" checked={radioState === prop[id].correct_answer} onClick={() => handleChange(prop[id].correct_answer)}/>
                  <p>{prop[id].correct_answer.replace(/&amp;/g, '&')
                      .replace(/&lt;/ , '<')
                      .replace(/&gt;/, '>')
                      .replace(/&quot;/g,'"')
                      .replace(/&#039;/g,"'")}</p>
              </div>
          </div>
        )
    }

    return(
        <div style={{padding: '1em'}}>
            {questions.length!==0 ? <Item prop={questions}/> : null}
            {id!=='9' ? <button onClick={nextQuestion}>Next Question</button> : <button onClick={handleResult}>Result</button>}
        </div>
    )
}

export default QuestionsScreen;