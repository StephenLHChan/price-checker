import { useState, useCallback } from 'react';
import { getSession } from 'next-auth/react';
import axios from 'axios';
import { Box, Button, Container, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import Input from '../../components/input';
import ResultTable from '../../components/result-table';
import PriceRecordForm from '../../components/price-record-form';

const Grocery = () => {
  const [showResult, setShowResult] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [result, setResult] = useState('');
  const [merchants, setMerchants] = useState('');

  const getResultData = async barcode => {
    const data = await axios.get('/api/product', {
      params: barcode
    });
    return data;
  };

  const getMerchantsList = async () => {
    const data = await axios.get('api/merchant');
    return data;
  };

  const searchItem = async barcode => {
    try {
      const { data } = await getResultData(barcode);
      setShowResult(true);
      displayResult(data);
    } catch (error) {
      console.error(error);
    }
  };

  const displayResult = useCallback(data => {
    setResult(data);
  });

  const postRecord = async reqBody => {
    const priceRecord = await axios.post('/api/price', reqBody);
    setShowForm(!showForm);
    return priceRecord;
  };

  const handleClick = async () => {
    const { data } = await getMerchantsList();
    console.log(data);
    setMerchants(data);
    setShowForm(!showForm);
  };

  return (
    <Container>
      <Box>
        <Box display={'inline-flex'}>
          <SearchIcon sx={{ fontSize: 80 }} />
          <Typography variant="h3" p={2}>
            Search for price...
          </Typography>
        </Box>

        <Box p={2}>
          <Input searchItem={searchItem} />
        </Box>
        {showResult && (
          <Box>
            <Box p={2}>
              <ResultTable data={result} />
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
              <Button variant="outlined" onClick={handleClick}>
                Add a new price record
              </Button>
            </Box>
            {showForm && (
              <Box p={2}>
                <PriceRecordForm
                  productId={result.productId}
                  merchants={merchants}
                  postRecord={postRecord}
                />
              </Box>
            )}
          </Box>
        )}
      </Box>
    </Container>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination:
          '/api/auth/signin?callbackUrl=http://localhost:3000/grocery',
        permanent: false
      }
    };
  }

  return {
    props: {
      session
    }
  };
}

export default Grocery;
