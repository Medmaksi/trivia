import React, {useContext, useEffect, useState} from 'react';
import {Context as AuthContext} from '../context/AuthContext';
import {useHistory} from 'react-router-dom';
import '../styles/startStyle.css';

const StartScreen = () => {
    const {state, getQuestions} = useContext(AuthContext);
    const [questions, setQuestions] = useState([]);

    let history = useHistory();
    useEffect(() => {
        getQuestions();
    }, [])
    useEffect(() => {
        setQuestions(state.questions);
    },[state]);

    const handleClick = () => {
        history.push({
            pathname:'/question/0',
            point: {detail: 0},
            statex: {detail: questions}
        });
    }

    return(
        <div className="container">
            <button className="startButton" onClick={handleClick}>Start Game</button>
        </div>
    )
}

export default StartScreen;