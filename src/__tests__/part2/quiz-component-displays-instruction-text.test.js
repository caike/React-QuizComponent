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

let fs = require('fs');
let quiz_data = require('../../quiz_data.json')

describe('Quiz Component', () => {
  it('displays the instruction text from JSON data @quiz-component-displays-instruction-text', () => {
    assert(quizComponentExists, "The Quiz component hasn't been created yet.")

    let quiz;
    try {
      quiz = shallow(<Quiz />)
    } catch (e) {
      assert(false, "We weren't able to mount the Quiz component")      
    }

    if (quiz.find('.QuizQuestion').length > 0) {
      assert(quiz.find('.QuizQuestion').text() == quiz_data.quiz_questions[0].instruction_text, "The div with a class of `QuizQuestion` isn't displaying the correct instruction text.")
    } else if (quiz.find('QuizQuestion')) {
      // this block will run after @quiz-component-displays-quiz-question-component
    } else {
      assert(false, "There is not a div with a className of QuizQuestion yet.")
    }
  })
})