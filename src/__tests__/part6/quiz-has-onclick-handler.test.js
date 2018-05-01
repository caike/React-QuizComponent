import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../App';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import sinon from 'sinon';

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
let babylon = require('babylon')

describe('Quiz Component', () => {
  it('has a method named `handleClick` and a renders a QuizQuestion component with a `clickHandler` prop @quiz-has-onclick-handler', () => {
    assert(quizComponentExists, "The Quiz component hasn't been created yet.")

    let quiz;

    try {
      quiz = shallow(<Quiz />)
    } catch (e) {
      assert(false, "We weren't able to mount the Quiz component")
    }

    assert(quiz.find('QuizQuestion').length == 1, "We couldn't find the QuizQuestion component in the Quiz component's JSX.")
    
    assert(quiz.find('QuizQuestion').props().clickHandler != null, "The QuizQuestion tag in Quiz's JSX doesn't have a `clickHandler` property.")

    assert(quiz.find('QuizQuestion').props().clickHandler.name == 'bound handleClick', "The QuizQuestion tag in Quiz's JSX has a `clickHandler` property, but the value isn't set to `this.handleClick.bind(this)`.")

  })
})