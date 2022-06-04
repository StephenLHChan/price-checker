import { useState } from 'react';
import { FilledInput, FormControl } from '@mui/material';

const Input = ({ searchItem }) => {
  const [barcode, setBarcode] = useState('');

  const handleChange = event => {
    setBarcode(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const reqParams = {
      barcode: barcode
    };
    await searchItem(reqParams);
    setBarcode('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl fullWidth={true} hiddenLabel>
        <FilledInput
          disableUnderline
          placeholder="Enter the barcode..."
          value={barcode}
          name="text"
          onChange={handleChange}
        />
      </FormControl>
    </form>
  );
};

export default Input;
