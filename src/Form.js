import React from "react";
import Inputs from "./Input";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputNumber: 4,
      type: "text",
      optionTag: "option",
      inputValues: {},
      questionsStore: null,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  addOption = (e) => {
    this.setState({
      inputNumber: this.state.inputNumber + 1,
    });
  };
  removeOption = (event) => {
    if (this.state.inputNumber > 1) {
      this.setState({
        inputNumber: this.state.inputNumber - 1,
      });
    } else {
      alert("No more options to remove! There must be at least one option.");
    }
  };
  handleQuestionChange = (event) => {
    this.setState({
      questionsStore: event.target.value,
    });
  };
  handleInputChange = (event) => {
    if (
      event.target.value !== null ||
      event.target.value !== "" ||
      event.target.value !== undefined
    ) {
      let inputValues = {
        ...this.state.inputValues,
        [event.target.name]: event.target.value,
      };
      this.setState({
        inputValues: inputValues,
      });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.getInputValues(
      this.state.inputValues,
      this.state.questionsStore
    );
  };

  render() {
    const placeholder = [
      "I:",
      "II:",
      "III:",
      "IV:",
      "V:",
      "VI:",
      "VII:",
      "VIII:",
      "IV:",
      "X:",
      "XI:",
      "XII:",
      "XIII:",
      "IX:",
      "XIV:",
      "XV:",
      "XVI:",
      "XVII:",
      "XVIII:",
      "XIX:",
      "XX:",
      "V:",
    ];

    const inputs = [];

    for (let i = 0; i < this.state.inputNumber; i++) {
      inputs.push(
        <Inputs
          key={i}
          name={this.state.optionTag + (i + 1)}
          placeholder={placeholder[i]}
          type={this.state.type}
          changeInput={this.handleInputChange}
        />
      );
    }

    return (
      <form className="App-main-container">
        <section id="user-input">
          <div className="user-input question">
            <p className = "intro" style={{fontWeight: "bolder",}}>
              Hey! Welcome to  lulu's questionnaire app. We help you provide questions and we are smart at answering them.
            </p>

            <h2>Question</h2>
            <input
              type="text"
              placeholder="Q: Enter Your Question Here"
              name="Question"
              onChange={this.handleQuestionChange}
            ></input>
          </div>
          <div className="user-input answer">
            <h2>Options</h2>
            {inputs}
          </div>
        </section>
        <InputButtons
          viewPopularity={this.props.viewPopularity}
          addOptions={this.addOption}
          removeOptions={this.removeOption}
          submit={this.handleSubmit}
        />
      </form>
    );
  }
}

function InputButtons(props) {
  return (
    <section id="button-section">
      <button type="submit" className="effect" onClick={props.submit}>
        <span>Answer</span>
      </button>
      <button className="effect" type="button" onClick={props.addOptions}>
        <span>Add option</span>
      </button>
      <button className="effect" type="button" onClick={props.removeOptions}>
        <span>Remove option</span>
      </button>
      <button type="button" className="effect" onClick={props.viewPopularity}>
        <span>Popularity</span>
      </button>
    </section>
  );
}

export default Form;
