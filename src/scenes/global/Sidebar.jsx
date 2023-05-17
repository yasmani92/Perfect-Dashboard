import { useState } from 'react';
import { Sidebar,
        Menu,
        MenuItem,
        SubMenu,
        useProSidebar,
        sidebarClasses,
        menuClasses
}from 'react-pro-sidebar';
import { Box, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { tokens } from '../../theme';
import { HomeOutlined,
        PeopleOutline,
        ContactsOutlined,
        ReceiptOutlined,
        PersonOutlined,
        CalendarTodayOutlined,
        HelpOutline,
        BarChartOutlined,
        PieChartOutline,
        TimelineOutlined,
        MenuOutlined,
        MapOutlined,
} from '@mui/icons-material';

const Item = ({ title, to, icon, selected, setSelected }) => {
  // const theme = useTheme();
  // const color = tokens(theme.palette.mode);

  return (
    <MenuItem 
     active={selected === title}
    //  style={{ color: colors.grey[100] }}
     onClick={() => setSelected(title)}
     icon={icon}
     component={<Link to={to}/>}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
}

const ProSidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Dashboard");
  const { collapseSidebar } = useProSidebar();

  return (
    <Box>
      <Sidebar
        width="300px"
        transitionDuration={500}
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            background: colors.primary[400],
          },
        }}
      >
        <Menu
          rootStyles={{
            ['.' + menuClasses.button]: {
            color: colors.grey[100],
              '&:hover': {
                background: colors.primary[700],
              },
            },
          }}
          menuItemStyles={{
            button: ({ level, active }) => {
              if (level === 0)
                return {
                  backgroundColor: active ? colors.primary[900] : undefined,
                };
            },
          }}
        >
          {/* LOGO AND MENU ICON */}
          <MenuItem              
            onClick={() => collapseSidebar() }
            icon={collapseSidebar ? <MenuOutlined /> : undefined}
            style={{
              color: colors.grey[100],
              margin: "10x 0 20px 0",
            }}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              ml="15px"
            >
              <Typography 
                variant='h3'
                color={colors.grey[100]}
              >
                ADMINIS
              </Typography>
            </Box>
          </MenuItem>

        {/* USER */}
          <Box mb="25px">
            <Box 
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <img
              src={`../../assets/profile-3.jpg`}
              alt="profile-user"
              width="100px"
              height="100px"
              style={{ cursor: "pointer",
              borderRadius: "50%" }}
              />
            </Box>
            <Box textAlign="center">
              <Typography
                variant="h2"
                color={colors.grey[200]}
                fontWeight="bold"
                sx={{ m: "10px 0 0 0" }}
              >
                Ed Roh
              </Typography>
              <Typography
                variant='h5'
                color={colors.greenAccent[500]}
              >
                VP Fancy Admin
              </Typography>
            </Box>
          </Box>
          {/* MENU ITEMS */}
          <Box>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant='h6'
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutline />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contact Information"
              to="/contacts"
              icon={<ContactsOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant='h6'
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutline />}
              selected={selected}
              setSelected={setSelected}
            />
            <SubMenu
              rootStyles={{
                ['& > .' + menuClasses.button]: {
                  '&:hover': {
                    background: colors.primary[400],
                  },
                },
                ['.' + menuClasses.button]: {
                  background: colors.primary[400],
                  color: colors.greenAccent[200]
                },
              }}
              icon={<BarChartOutlined />}
              label="Charts"
            >
              <Item
                title="Bar Chart"
                to="/bar"
                icon={<BarChartOutlined />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Pie Chart"
                to="/pie"
                icon={<PieChartOutline />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Line Chart"
                to="/line"
                icon={<TimelineOutlined />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Geography Chart"
                to="/geography"
                icon={<MapOutlined />}
                selected={selected}
                setSelected={setSelected}
              />
            </SubMenu>                
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  )
}

export default ProSidebar;