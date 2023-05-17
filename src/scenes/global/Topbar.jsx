import { useContext } from 'react';
import { Box, IconButton, InputBase, useTheme } from '@mui/material';
import { ColorModeContext, tokens } from '../../theme';
import { Search,
       PersonOutline,
       SettingsOutlined,
       NotificationsOutlined,
       LightModeOutlined, DarkModeOutlined } 
from '@mui/icons-material';

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return ( 
  <Box display="flex" justifyContent="space-between" p={2}>
    {/* SEARCH BAR */}
    <Box
      display="flex"
      backgroundColor={colors.primary[400]}
      borderRadius="3px"
    >
      <InputBase
        sx={{ ml: 2, flex: 1 }} 
        placeholder="Search" />
      <IconButton>
        <Search />
      </IconButton>
    </Box>

    {/* ICONS */}
    <Box display="flex">
      <IconButton onClick={colorMode.toggleColorMode}>
        {theme.palette.mode === 'dark' ? (
        <LightModeOutlined />
        ) : (
          <DarkModeOutlined />
        )}
      </IconButton>
      <IconButton>
        <NotificationsOutlined />
      </IconButton>
      <IconButton>
      <SettingsOutlined />
      </IconButton>
      <IconButton>
        <PersonOutline />
      </IconButton>
    </Box>
    
  </Box>
  )
}

export default Topbar;