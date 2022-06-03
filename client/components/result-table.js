import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';

const ResultTable = ({ data }) => {
  const { name, barcode, price, merchant } = data;

  const rows = [
    {
      label: 'Name', 
      data: name 
    },
    {
      label: 'Barcode', 
      data: barcode 
    },
    {
      label: 'Price', 
      data: price 
    },
    {
      label: 'Merchant', 
      data: merchant 
    },
  ]
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">

        <TableBody>
          {rows.map(row => (
            <TableRow
              key={row.label}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.label}
              </TableCell>
              <TableCell align="right">{row.data}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ResultTable;
