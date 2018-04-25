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
  it('imports the React and Component classes @quiz-component-imports-react', () => {
    let file;
    try {
      file = fs.readFileSync(__dirname + '/../../Quiz.js').toString();
    } catch (e) {
      assert(false, "The Quiz.js file hasn't been created yet.")
    }

    var ast = acorn_loose.parse_dammit(file, { sourceType: 'module' });

    let react_class_import_found = false;
    let component_class_import_found = false;

    ast['body'].forEach(element => {
      if (element.type == 'ImportDeclaration') {
        element.specifiers.forEach(el => {
          if (el.type == 'ImportDefaultSpecifier' && el.local.name == 'React') {
            react_class_import_found = true
          } else if (el.type == 'ImportSpecifier' && el.imported.name == 'Component') {
            component_class_import_found = true
          }
        })
      }
    })
    assert(react_class_import_found, "You're not importing the React class")
    assert(component_class_import_found, "You're not importing the Component class")
  });
})