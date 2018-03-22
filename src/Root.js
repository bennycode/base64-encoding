import React from 'react';

class Root extends React.Component {

  state = {
    ascii: 'ascii',
    base64: 'base64',
  }

  onConvert = event =>
    this.setState({...this.state, ascii: this.state.base64, base64: this.state.ascii});

  render() {
    return (
      <div>
        <textarea id="ascii" value={this.state.ascii}></textarea>
        <p></p>
        <textarea id="base64" value={this.state.base64}></textarea>
        <p></p>
        <input type="button" id="action" onClick={this.onConvert} value="Convert"></input>
      </div>
    );
  }
}

export default Root;
