import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Stack from '@mui/material/Stack';
import PaidIcon from '@mui/icons-material/Paid';
import Typography from '@mui/material/Typography';

interface IDataHistory {
  description: string
  date: string
  value: number
}

interface PropsLineTable {
  data: IDataHistory
}

export function LineTable({ data }: PropsLineTable){
    const { description, date, value } = data;

    return (<TableRow sx={{border: 'none'}}>
        <TableCell component="th" scope="row" sx={{border: 'none'}}>
          <Stack direction="row" gap={4} alignItems="flex-end">

            <Stack>
                <PaidIcon style={{ fontSize: '3.75rem' }}/>
            </Stack>

            <Stack direction="column" gap={1}> 
              <Typography sx={{ fontSize:'1.125rem', fontWeight:700}}>
                  {description}
              </Typography>
              <Typography>
                  {date}
              </Typography>
            </Stack>
          </Stack>
        </TableCell>
        <TableCell align="right" component="th" scope="row" sx={{border: 'none'}}>
          <Stack direction="row" justifyContent="flex-end" sx={{height:'3.5rem'}} alignItems='flex-end'>
            <Typography  sx={{ fontSize:'1.125rem', fontWeight:600}}>
              R$ {value.toFixed(2).replace(".", ",")}
            </Typography>
          </Stack>
        </TableCell>
      </TableRow>)
}