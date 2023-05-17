import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import { mockDataTeam } from '../../data/mockData';
import { AdminPanelSettingsOutlined,
        LockOpenOutlined,
        SecurityOutlined
    } from '@mui/icons-material';
import Header from '../../components/Header';

const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
      { field: 'id',
        headerName: 'ID',
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
        field: 'access',
        headerName: 'Access Level',
        flex: 1,
        editable: true,
        renderCell: ({ row: { access }}) => {
          return (
            <Box
             width="60%"
             m="0 auto"
             p="5px"
             display="flex"
             justifyContent="center"
             backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : colors.greenAccent[800]
             }
             borderRadius="4px"
            >
              {access === "admin" && <AdminPanelSettingsOutlined />}
              {access === "manager" && <SecurityOutlined />}
              {access === "user" && <LockOpenOutlined />}
              <Typography
                color={colors.grey[100]}
                sx={{ ml: "5px" }}
              >
                {access}
              </Typography>
            </Box>
          )
        }
      },
      {        
        field: 'phone',
        headerName: 'Phone Number',
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
            title="TEAM"
            subtitle="Managing the Team Members"
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
            rows={mockDataTeam}
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

export default Team;