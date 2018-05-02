import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton'

class QuizQuestion extends Component {
  constructor(props) {
    super(props)
    this.state = { incorrectAnswer: false }
  }
  handleClick(buttonText) {
    if (this.props.quiz_question.answer == buttonText) {
      this.setState({ incorrectAnswer: false })
      this.props.clickHandler()
    } else {
      this.setState({ incorrectAnswer: true })
    }
  }
  render() {
    return (
      <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            {this.props.quiz_question.answer_options.map((answer_option, index) => {
              return <QuizQuestionButton key={index} button_text={answer_option} clickHandler={this.handleClick.bind(this)} />
            })}
          </ul>
        </section>
        {this.state.incorrectAnswer ? <p className='error'>Sorry, that's not right.</p> : null}
      </main>
    )
  }
}

export default QuizQuestion