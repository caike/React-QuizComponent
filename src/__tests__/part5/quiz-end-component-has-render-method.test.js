import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../App';
import { shallow } from 'enzyme';
import { assert } from 'chai';

let quizEndComponentExists = false;
let QuizEnd;
try {
  QuizEnd = require('../../QuizEnd.js').default;
  quizEndComponentExists = true;
} catch (e) {
  quizEndComponentExists = false;
}

let fs = require('fs');

describe('QuizEnd Component', () => {
  it('has a render method that returns the correct HTML  @quiz-end-component-has-render-method', () => {
    assert(quizEndComponentExists, "The QuizEnd component hasn't been created yet.")

    let quizEnd;
    try {
      quizEnd = shallow(<QuizEnd />)
    } catch (e) {
      assert(false, "We weren't able to mount the QuizEnd component")
    }

    let html = quizEnd.html()
    let div = document.createElement('div')
    div.innerHTML = html

    assert(div.querySelector('div') != null, "no div")
    assert(div.querySelector('div p') != null, "no div -> p")
    assert(div.querySelector('div a') != null, "no div -> a")
    assert(div.querySelector('div p').innerHTML == "Thanks for playing!", "incorrect p text")
    assert(div.querySelector('div a').innerHTML == "Reset Quiz", "incorrect a text")
    assert(div.querySelector('div a').getAttribute('href') == '', "incorrect href")
  })
})