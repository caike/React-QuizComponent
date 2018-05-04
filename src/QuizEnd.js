import React, { Component } from "react";

class QuizEnd extends Component {
  handleResetClick(){
    this.props.resetClickHandler();
  }
  render(){
    return ( <div> <p>Thanks for playing!</p>
            <a onClick={this.handleResetClick.bind(this)} href=''>Reset Quiz</a> </div> );
  }
}

export default QuizEnd
