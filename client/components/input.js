import { useState } from 'react';
import { FilledInput, FormControl } from '@mui/material';

const Input = ({ searchItem }) => {
  const [text, setText] = useState('');

  const handleChange = event => {
    setText(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const reqBody = {
      barcode: formElements.text.value
    };
    await searchItem(reqBody);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl fullWidth={true} hiddenLabel>
        <FilledInput
          disableUnderline
          placeholder="Enter the barcode"
          value={text}
          name="text"
          onChange={handleChange}
        />
      </FormControl>
    </form>
  );
};

export default Input;
