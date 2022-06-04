import {
  Box,
  FormControl,
  TextField,
  Button,
  Paper,
  Autocomplete
} from '@mui/material';
import { useState } from 'react';

const PriceRecordForm = ({ productId, merchants, postRecord }) => {
  const [merchant, setMerchant] = useState({});

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const reqBody = {
      product_id: productId,
      merchant_id: merchant.id,
      price: Number(formElements.price.value)
    };
    postRecord(reqBody);
    setMerchant({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box component={Paper}>
        <Box
          display={'flex'}
          alignItems="center"
          justifyContent="center"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' }
          }}
        >
          <FormControl margin="normal" required>
            <Autocomplete
              disablePortal
              id="merchant"
              options={merchants}
              getOptionLabel={option => option.name}
              sx={{ width: 300 }}
              onChange={(event, newValue) => {
                setMerchant(newValue);
              }}
              renderInput={params => (
                <TextField
                  {...params}
                  aria-label="merchant"
                  label="Merchant"
                  name="merchant"
                  type="text"
                />
              )}
            />
          </FormControl>

          <FormControl margin="normal" required>
            <TextField
              label="Price"
              aria-label="price"
              type="decimal"
              name="price"
              id="price"
            />
          </FormControl>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center" p={2}>
          <Button type="submit" variant="contained" size="large">
            Submit
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default PriceRecordForm;
