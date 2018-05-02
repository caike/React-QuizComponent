import React, { Component } from 'react'
import QuizQuestion from './QuizQuestion'
import QuizEnd from './QuizEnd'

let quiz_data = require('./quiz_data.json')

class Quiz extends Component {
  constructor(props) {
    super(props)
    this.state = quiz_data
  }
  render() {
    const isQuizEnd = (this.state.quiz_position - 1 == this.state.quiz_questions.length)
    return (
      <div>
        {isQuizEnd ? <QuizEnd /> :
        <QuizQuestion quiz_question={this.state.quiz_questions[this.state.quiz_position - 1]} />}
      </div>
    )
  }
}

export default Quiz