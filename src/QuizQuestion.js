import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton.js";

class QuizQuestion extends Component {

  constructor(props){
    super(props);
    this.state = {
      incorrectAnswer: false
    };
  }

  handleClick(buttonText){
    console.log("quiz-question: 14");
    const isCorrectAnswer = (buttonText === this.props.quiz_question.answer);
    if(isCorrectAnswer){
      this.props.clickHandler(buttonText);
      this.setState({ incorrectAnswer: false });
    }else{
      this.setState({ incorrectAnswer: true });
    }
  }

  render(){
    let questionButtons = this.props.quiz_question.answer_options.map((a,b) => {
      return ( <QuizQuestionButton
              clickHandler={this.handleClick.bind(this)}
              key={b} button_text={a}/> );
    });
		return(<main>
             <section>
               <p>
                 {this.props.quiz_question.instruction_text}
               </p>
             </section>
             <section className="buttons">
               <ul> {questionButtons} </ul>
             </section>
             {this.state.incorrectAnswer ? <p className="error">Sorry, that's not right.</p> : null }
           </main>);
  }
}

export default QuizQuestion
