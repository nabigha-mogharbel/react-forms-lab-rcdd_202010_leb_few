import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input value={this.state)} type="text" name="message" id="message" />
      </div>
    );
  }
}

export default TwitterMessage;
