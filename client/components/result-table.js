import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
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
    }
  ];
  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 'md' }} aria-label="result table">
        <TableBody>
          {rows.map(row => (
            <TableRow
              key={row.label}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx={{ fontWeight: 'bold' }} component="th" scope="row">
                {row.label}
              </TableCell>
              <TableCell align="left" >{row.data}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ResultTable;
