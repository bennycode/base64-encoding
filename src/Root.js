import React from 'react';
import TextArea from './TextArea';

class Root extends React.Component {

  state = {
    ascii: 'ascii',
    base64: 'base64',
  }

  onConvert = event =>
    this.setState({...this.state, ascii: this.state.base64, base64: this.state.ascii});

  render() {
    return (
      <div style={{width: '500px', margin: '0 auto'}}>
        <h1>Base64 Converter</h1>
        <TextArea value={this.state.ascii}></TextArea>
        <TextArea value={this.state.base64}></TextArea>
        <input type="button" onClick={this.onConvert} value="Convert"></input>
      </div>
    );
  }
}

export default Root;
