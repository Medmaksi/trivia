import React from 'react';
import { useParams, useHistory } from "react-router-dom";

const ResultScreen = () => {
    const history = useHistory();
    console.log(history.location.point.detail);
    return(
        <div>
            <p>Your score: {history.location.point.detail}</p>
        </div>
    )
}

export default ResultScreen;