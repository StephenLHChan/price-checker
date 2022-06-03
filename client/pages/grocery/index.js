import { useState, useCallback } from 'react';
import { getSession } from 'next-auth/react';
import axios from 'axios';
import { Box, Container, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import Input from '../../components/input';
import ResultTable from '../../components/result-table';

const Grocery = () => {
  const [displayResult, setDisplayResult] = useState(false);
  const [result, setResult] = useState('');

  const getData = async barcode => {
    const data = await axios.get('/api/product', {
      params: barcode
    });
    return data;
  };

  const searchItem = async barcode => {
    try {
      const { data } = await getData(barcode);
      setDisplayResult(true);
      showResult(data);
    } catch (error) {
      console.error(error);
    }
  };

  const showResult = useCallback(data => {
    setResult(data);
  });

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
        {displayResult && (
          <Box p={2}>
            <ResultTable data={result} />
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
