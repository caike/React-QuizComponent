import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../App';
import { shallow } from 'enzyme';
import { assert } from 'chai';

let fs = require('fs');
let babylon = require("babylon");

describe('Quiz Component', () => {
  it('imports App.css @quiz-component-imports-css', () => {
    let file;
    try {
      file = fs.readFileSync(__dirname + '/../../Quiz.js').toString();
    } catch (e) {
      assert(false, "The Quiz.js file hasn't been created yet.")
    }

    let ast = babylon.parse(file, { sourceType: "module", plugins: ["jsx"] })

    let css_import_found = false;

    ast['program']['body'].forEach(element => {
      if (element.type == 'ImportDeclaration') {
        if (element.source.value == './App.css') {
          css_import_found = true
        }
      }
    })
    assert(css_import_found, "You're not importing the App.css file.")
  });
})