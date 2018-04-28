import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../App';
import { shallow } from 'enzyme';
import { assert } from 'chai';

let quizQuestionButtonComponentExists = false;
let QuizQuestionButton;
try {
  QuizQuestionButton = require('../../QuizQuestionButton.js').default;
  quizQuestionButtonComponentExists = true;
} catch (e) {
  quizQuestionButtonComponentExists = false;
}

let fs = require('fs');

describe('QuizQuestionButton Component', () => {
  it('has a render method that returns the correct HTML  @quiz-question-button-component-has-render-method', () => {
    assert(quizQuestionButtonComponentExists, "The QuizQuestionButton component hasn't been created yet.")

    let mock_prop = {button_text: 5}

    let quizQuestionButton;
    try {
      quizQuestionButton = shallow(<QuizQuestionButton button_text={mock_prop.button_text} />)
    } catch (e) {
      assert(false, "We weren't able to mount the QuizQuestionButton component")
    }

    let html = quizQuestionButton.html()
    let div = document.createElement('div')
    div.innerHTML = html

    assert(div.querySelector('li') != null, "no li")
    assert(div.querySelectorAll('li button') != null, "no li -> button")
    assert(div.querySelectorAll('li button').length == 1, "not a single button")
  })
})