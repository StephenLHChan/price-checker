import { useState, useCallback } from 'react';
import { getSession } from 'next-auth/react';
import axios from 'axios';
import { Box, Container, Typography } from '@mui/material';

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
        <Typography p={4}>Search for Grocery</Typography>
        <Input searchItem={searchItem} p={4} />
        {displayResult && <ResultTable data={result} p={4}/>}
      </Box>
    </Container>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context)

  if (!session){
    return {
      redirect: {
        destination: '/api/auth/signin?callbackUrl=http://localhost:3000/grocery',
        permanent: false
      }
    }
  }

  return {
    props: {
      session,
    }
  }
}

export default Grocery;
