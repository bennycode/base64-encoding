import React from 'react';

class Root extends React.Component {
  render() {
    return (
      <div>
        <textarea id={'input'} defaultValue={'Input'}></textarea>
        <p></p>
        <textarea id={'output'} defaultValue={'Output'}></textarea>
        <p></p>
        <input type={'button'} id={'action'} value={'Convert'}></input>
      </div>
    );
  }
}

export default Root;
