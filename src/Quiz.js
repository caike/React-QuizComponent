import React, { Component } from "react";
import QuizQuestion from "./QuizQuestion.js";
import QuizEnd from "./QuizEnd.js";

let quiz_data = require("./quiz_data.json");

class Quiz extends Component {
  constructor(props){
    super(props);
    this.state = quiz_data;
  }

  handleClick(){
    console.log("hey");
    this.setState((state) => {
                  return { quiz_position: state.quiz_position + 1 }
    });
  }

  handleResetClick(){
    this.setState({ quiz_position: 1 });
  }

  render(){
    const isQuizEnd = (this.state.quiz_position - 1 === this.state.quiz_questions.length);
    return (<div>
            {isQuizEnd ? <QuizEnd resetClickHandler={this.handleResetClick.bind(this)} /> :
              <QuizQuestion
                clickHandler={this.handleClick.bind(this)}
                quiz_question={this.state.quiz_questions[this.state.quiz_position-1]} />
            }
            </div>);
  }
}

export default Quiz
