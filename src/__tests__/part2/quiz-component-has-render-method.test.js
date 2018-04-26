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
  it('has a render method that returns a single div with the text `Quiz`  @quiz-component-has-render-method', () => {
    assert(quizComponentExists, "The Quiz component hasn't been created yet.")

    let quiz;
    try {
      quiz = shallow(<Quiz />)
    } catch (e) {
      assert(false, "We weren't able to mount the Quiz component")      
    }

    if (quiz.containsMatchingElement(<div className="QuizQuestion"></div>)) {
      // this block will run after @quiz-component-has-quiz-question-div
    } else if ( quiz.find('.QuizQuestion').getElements().length == 1) {
      let el = quiz.find('.QuizQuestion').getElements()[0];
      if (el.props.className == 'QuizQuestion') {
        if (el.props.children == null) {
          assert(el.props.children == quiz_data.quiz_questions[0].instruction_text)
        }
      }
    } else {
      // this block will run until @quiz-component-has-quiz-question-div
      assert(quiz.containsMatchingElement(<div>Quiz</div>), "The Quiz component isn't rendering a single div with the text `Quiz`")
    }
  })
})