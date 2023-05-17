import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import { mockDataInvoices } from '../../data/mockData';
import Header from '../../components/Header';

const Invoices = () => {
    const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: 'id',
      headerName: 'ID',
      flex: 0.5
    },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: "name-column--cell",
      editable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
      editable: true,
    },
    {
      field: 'cost',
      headerName: 'Cost',
      headerAlign: 'left',
      flex: 1,
      editable: true,
    },
    {
      field: 'phone',
      headerName: 'Phone Number',
      editable: true,
    },    
    {       
      field: 'date',
      headerName: 'Date',
      editable: true,
    },  
  ];
  return (
    <>
    <Box m="20px">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Header
          title="INVOICES"
          subtitle="List of Invoice Balance"
        />
      </Box>
      <Box
        m="40px 0 0 0"
        height="63vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]}`,
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none"
          },            
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
        }}
      >
        <DataGrid
          rows={mockDataInvoices}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </Box>    
  </>
  )
}

export default Invoices