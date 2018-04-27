import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../App';
import { shallow } from 'enzyme';
import { assert } from 'chai';

let quizComponentExists = false;
let Quiz;
try {
  Quiz = require('../../Quiz.js').default;
  quizComponentExists = true;
} catch (e) {
  quizComponentExists = false;
}

let quizQuestionComponentExists = false;
let QuizQuestion;
try {
  QuizQuestion = require('../../QuizQuestion.js').default;
  quizQuestionComponentExists = true;
} catch (e) {
  quizQuestionComponentExists = false;
}

let fs = require('fs');
let quiz_data = require('../../quiz_data.json')

describe('Quiz Component', () => {
  it('has QuizQuestion component with correct prop @@quiz-question-component-has-quiz-question-prop', () => {
    assert(quizQuestionComponentExists, "The Quiz component hasn't been created yet.")
    assert(quizComponentExists, "The QuizQuestion component hasn't been created yet.")

    let quiz;
    try {
      quiz = shallow(<Quiz />)
    } catch (e) {
      assert(false, "We weren't able to mount the Quiz component")      
    }

    assert(quiz.props().quiz_question != null, "prop doesn't exist")
    assert(quiz.props().quiz_question == quiz_data.quiz_questions[0], "prop doesn't have the correct value")
    assert(quiz.find('QuizQuestion').length == 1, "We couldn't find the QuizQuestion component being loaded by the Quiz component")
  })
})