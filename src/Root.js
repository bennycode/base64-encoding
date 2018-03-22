import React from 'react';
import TextArea from './TextArea';

class Root extends React.Component {

  state = {
    ascii: 'ascii',
    base64: 'base64',
    error: null,
  }

  encode = (ascii) => this.setState({...this.state, ascii, base64: btoa(ascii), error: null});
  decode = (base64) => {
    try {
      this.setState({...this.state, base64, ascii: atob(base64), error: null});
    } catch(error) {
      this.setState({...this.state, base64, error: error.message});
    }
  };

  onConvert = event =>
    this.setState({...this.state, ascii: this.state.base64, base64: this.state.ascii});

  render() {
    return (
      <div style={{width: '500px', margin: '0 auto'}}>
        <h1>Base64 Converter</h1>
        <TextArea value={this.state.ascii} onChange={event => this.encode(event.target.value)} />
        <TextArea value={this.state.base64} onChange={event => this.decode(event.target.value)} />
        <div style={{color: 'red'}}>{this.state.error}</div>
      </div>
    );
  }
}

export default Root;
