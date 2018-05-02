import React, { Component } from 'react'
import QuizQuestion from './QuizQuestion'

let quiz_data = require('./quiz_data.json')

class Quiz extends Component {
  constructor(props) {
    super(props)
    this.state = quiz_data
  }
  render() {
    return (
      <div>
        <QuizQuestion quiz_question={this.state.quiz_questions[this.state.quiz_position - 1]} />
      </div>
    )
  }
}

export default Quiz