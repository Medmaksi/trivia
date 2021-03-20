import createDataContext from './createDataContext';
const axios = require('axios');

const authReducer = (state, action) => {
  switch (action.type) {
    case 'getToken':
      return {
        ...state,
        token: action.token
      }
    case 'getQuestions':
      console.log(action.payload.questions)
      return {
        ...state,
        questions: action.payload.questions
      }
    default:
      return state;
  }
};

const getToken = (dispatch) => {
  return() => {
    axios
        .post('https://opentdb.com/api_token.php?command=request',
        )
        .then(function (response) {
          dispatch({
            type: 'getToken',
            token: response.data.token
          });
        })
        .catch(function (error) {
          console.log(error.response);
        });
  }
}

const getQuestions = (dispatch) => {
  return () => {
    axios
        .post('https://opentdb.com/api.php?amount=10',
        )
        .then(function (response) {
          dispatch({
            type: 'getQuestions',
            payload: {
              questions: response.data.results
            }
          })
        })
        .catch(function (error) {
          console.log(error.response);
        });
  }
}

export const {Provider, Context} = createDataContext(
  authReducer,
  {getToken, getQuestions},
  {token: null, questions: null},
);
