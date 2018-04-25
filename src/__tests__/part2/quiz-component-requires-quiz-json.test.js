import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../App';
import { shallow } from 'enzyme';
import { assert } from 'chai';

let fs = require('fs');
var esprima = require('esprima');
let acorn = require("acorn");
let acorn_loose = require("acorn/dist/acorn_loose");

describe('Quiz Component', () => {
  it('requires quiz_data.json @quiz-component-imports-css', () => {
    let file;
    try {
      file = fs.readFileSync(__dirname + '/../../Quiz.js').toString();
    } catch (e) {
      assert(false, "The Quiz.js file hasn't been created yet.")
    }

    var ast = acorn_loose.parse_dammit(file, { sourceType: 'module' });
    assert(ast.body.length != 0, "We can't find any code in the Quiz.js file")

    let quiz_data_loaded_correctly = false;

    ast['body'].forEach(element => {
      if (element.type == 'VariableDeclaration') {
        if (element.kind == 'let') {
          if (element.declarations[0].id.name == 'quiz_data') {
            if (element.declarations[0].init.callee.name == 'require') {
              if (element.declarations[0].init.arguments[0].value == './quiz_data.json') {
                quiz_data_loaded_correctly = true
              } else {
                assert(false, "We found where you're trying to require a file in the `quiz_data` variable, but it doesn't look like you're requiring the correct file.")
              }
            } else {
              assert(false, "Make sure you're using the `require` function to load the `quiz_data.json` file into a variable.")
            }
          } else {
            assert(false, "We'd like you to name your variable `quiz_data`.")
          }
        } else {
          assert(false, "We can't find where you're creating a variable with the `let` keyword.")
        }
      }
    })
    assert(quiz_data_loaded_correctly, "We can't find where you're loading the quiz_data JSON into a variable named quiz_data.")
  });
})