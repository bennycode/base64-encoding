import React from 'react';

const noop = () => {};

const TextArea = ({value, onChange = noop}) => {
  const textareaStyle = {resize: 'none', width: '100%', minHeight: '100px', marginBottom: '10px', display: 'block'};
  return (
    <textarea style={textareaStyle} value={value} onChange={onChange}></textarea>
  );
}

export default TextArea;
