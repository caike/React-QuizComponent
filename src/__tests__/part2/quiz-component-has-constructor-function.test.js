import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../App';
import { shallow } from 'enzyme';
import { assert } from 'chai';

let fs = require('fs');
let acorn_loose = require("acorn/dist/acorn_loose");

describe('Quiz Component', () => {
  it('has a constructor function that accepts `props` as a parameter  @quiz-component-has-constructor-function', () => {
    let file;
    try {
      file = fs.readFileSync(__dirname + '/../../Quiz.js').toString();
    } catch (e) {
      assert(false, "The Quiz.js file hasn't been created yet.")
    }

    var ast = acorn_loose.parse_dammit(file, { sourceType: 'module' });

    let constructor_function_found = 0;

    ast['body'].forEach(element => {
      if (element.type == 'ClassDeclaration') {
        if (element.id.name == 'Quiz') {
          element.body.body.forEach(el => {
            if (el.kind == 'constructor') {
              if (el.value.params && el.value.params.length == 1) {
                assert(el.value.params[0].name == 'props', "The Quiz constructor function should accept a single parameter named `props`.")
              } else {
                assert(false, "The Quiz constructor function should accept a single parameter named `props`.")
              }
              constructor_function_found = constructor_function_found + 1;
            }
          })
        }
      }
    })

    assert(constructor_function_found > 0, "We couldn't find a constructor function in your class.")
    assert(constructor_function_found == 1, "We found more than one constructor function, but there's only supposed to be one.")
  })

  it('has a constructor function calls `super(props)` @quiz-component-has-constructor-function', () => {
    let file;
    try {
      file = fs.readFileSync(__dirname + '/../../Quiz.js').toString();
    } catch (e) {
      assert(false, "The Quiz.js file hasn't been created yet.")
    }

    var ast = acorn_loose.parse_dammit(file, { sourceType: 'module' });

    let constructor_function_found = 0;

    ast['body'].forEach(element => {
      if (element.type == 'ClassDeclaration') {
        if (element.id.name == 'Quiz') {
          element.body.body.forEach(el => {
            if (el.kind == 'constructor') {
              if (el.value.body && el.value.body.body.length >= 1) {
                assert(el.value.body.body[0].expression.callee.type == 'Super', "We couldn't find a call to `super()` in your constructor.")
                assert(el.value.body.body[0].expression.arguments != 0, "Your call to `super()` doesn't contain any parameters.")
                assert(el.value.body.body[0].expression.arguments[0].name == 'props', "We found a call to `super()` in the constructor, but it doesn't look like you're passing it `props` as a single argument")
              } else {
                assert(false, "The Quiz constructor function should accept a single parameter named `props`.")
              }
              constructor_function_found = constructor_function_found + 1;
            }
          })
        }
      }
    })

    assert(constructor_function_found > 0, "We couldn't find a constructor function in your class.")
    assert(constructor_function_found == 1, "We found more than one constructor function, but there's only supposed to be one.")
  })

})