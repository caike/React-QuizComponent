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
  it('handleResetClick() method sets the quiz_position to 1 @quiz-handle-reset-click-sets-position-state', () => {
    assert(quizComponentExists, "The Quiz component hasn't been created yet.")

    let quiz;

    try {
      quiz = shallow(<Quiz />)
    } catch (e) {
      assert(false, "We weren't able to mount the Quiz component")
    }

    quiz.setState({ quiz_position: 3 })

    assert(quiz.state().quiz_position == 3, "The Quiz component's state does not have a key named `quiz_position` with the correct value - are you sure you're still setting the component's state to `quiz_data`?")
    quiz.instance().handleResetClick()

    assert(quiz.state().quiz_position == 1, "The Quiz component state's `quiz_position` value is not being reset to 1 when the `handleResetClick()` method is called.")
  })
})