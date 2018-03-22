import React from 'react';

class Root extends React.Component {

  state = {
    ascii: 'ascii',
    base64: 'base64',
  }

  onConvert = event =>
    this.setState({...this.state, ascii: this.state.base64, base64: this.state.ascii});

  render() {
    const textareaStyle = {width: '100%', minHeight: '100px', marginBottom: '10px', display: 'block'};
    return (
      <div style={{width: '500px', margin: '0 auto'}}>
        <h1>Base64 Converter</h1>
        <textarea style={textareaStyle} value={this.state.ascii}></textarea>
        <textarea style={textareaStyle} value={this.state.base64}></textarea>
        <input type="button" onClick={this.onConvert} value="Convert"></input>
      </div>
    );
  }
}

export default Root;
