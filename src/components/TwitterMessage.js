import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      remainingChars: this.props.maxChars,
      inputValue: ""
    };
  }

  handleTypeInput = (event) => {
    this.setState({
      remainingChars: (this.state.remainingChars - event.target.value.length),
      inputValue: event.target.value
    });
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleTypeInput} value={this.state.inputValue}/>
        {this.state.remainingChars}
      </div>
    );
  }
}

export default TwitterMessage;
