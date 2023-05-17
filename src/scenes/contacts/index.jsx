import { Box, useTheme } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import { mockDataContacts } from '../../data/mockData';
// import { AdminPanelSettingsOutlined,
//         LockOpenOutlined,
//         SecurityOutlined
//     } from '@mui/icons-material';
import Header from '../../components/Header';

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: 'id',
      headerName: 'ID',
      flex: 0.5
    },
    {
      field: 'registrarId',
      headerName: 'Registrar ID',
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
      field: 'age',
      headerName: 'Age',
      headerAlign: 'left',
      align: 'left',
      type: 'number',
      flex: 1,
      editable: true,
    },
    {
      field: 'phone',
      headerName: 'Phone Number',
      editable: true,
    },    
    {       
      field: 'address',
      headerName: 'Address',
      editable: true,
    },
    {
      field: 'city',
      headerName: 'City',
      editable: true,
    },
    {
      field: 'zipCode',
      headerName: 'ZipCode',
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
          title="CONTACTS"
          subtitle="List of Contacts for Future Reference"
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
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
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

export default Contacts;