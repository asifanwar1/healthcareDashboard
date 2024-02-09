import React, {useState} from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DateRangeIcon from '@mui/icons-material/DateRange';
import SmsIcon from '@mui/icons-material/Sms';
import PieChartIcon from '@mui/icons-material/PieChart';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { LogoIcon } from '../../assets/icons/index.js'
import { useDarkMode } from '../../context/DarkModeContext.jsx';




const drawerWidth = 240;


const menuItems = [
    {icon: <DashboardIcon/>, name: 'Home', path:'/'},
    {icon: <DateRangeIcon/>, name: 'Schedule', path:'/schedule'},
    {icon: <SmsIcon/>, name: 'Messages', path:'/messages'}, //change from user to profile
    {icon: <PieChartIcon/>, name: 'Charts', path:'/charts'},
    {icon: <SettingsIcon/>, name: 'Settings', path:'/settings'},
    {icon: <LogoutIcon/>, name: 'Logout', path:'/logout'},
]

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));



const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    // zIndex: theme.zIndex.drawer + 1,
     
    boxShadow:'none',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
}));



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    '& .MuiDrawer-paper':{
        // borderRadius: '15px',
        border:'none',
        // backgroundColor: '#282C31',
        ...(open ? openedMixin(theme) : closedMixin(theme))
    }
  }),
);

export default function SideBar() {
  const { darkMode } = useDarkMode();
  const [open, setOpen] = useState(false);


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex',}}>
        {/* <CssBaseline />
         <AppBar position="fixed" sx={{backgroundColor: darkMode ? '#212427' : '#EFF3F9',}}>
            <Toolbar>
                <Box sx={{display:'flex', flexDirection:'column', gap:'5px', marginTop:{xs:'10px', md:'15'}, marginLeft: {xs:'16%', md:'11%'}, color: darkMode ? '#DFEBE9' : '#4F4F4F ',}}>
                <Typography variant="h5" >
                    Health Overview
                </Typography>
                <Typography variant="body2" >
                    August 12, 2023
                </Typography>
                </Box>
                <Box sx={{display:{xs:'none', md:'flex'}, marginLeft:'45%', color: darkMode ? '#DFEBE9' : '#4F4F4F ',}}>
                  <Stack direction="row" spacing={1}>
                    <Button>
                      <SearchOutlinedIcon />
                    </Button>
                    <Button>
                      <NotificationsIcon />
                    </Button>
                  </Stack>
                </Box>
            </Toolbar>
      </AppBar> */}
      <Drawer variant="permanent" open={open} sx={{ '& .MuiDrawer-paper':{backgroundColor: darkMode ? '#282C31' : '#FFF',}}}>
        <DrawerHeader >
            {open ?
                <Box sx={{margin:'auto', marginTop:'20px'}} onClick={handleDrawerClose}>
                    <LogoIcon/>
                </Box>
            :
                <Box sx={{margin:'auto', marginTop:'20px'}} onClick={handleDrawerOpen}>
                    <LogoIcon/>
                </Box>
            }
        </DrawerHeader>
        <List sx={{marginTop:'25px', marginLeft: open ? '25px' : '0',}}>
        {menuItems.map((element, index) =>(
            
            <ListItem  key={index} disablePadding className="listItem" sx={{ display: 'block', py: 1,}}>
                {/* <Link to={element.path}> */}
                <ListItemButton className={`listBtn ${index === 0 ? 'active' : ''}`} sx={{ 
                        minHeight: 48, 
                        justifyContent: open ? 'initial' : 'center', 
                        px: 2.5, 
                        '&:hover': {backgroundColor:'#DFEBE9',
                                    borderRadius: '20px 0px 0px 20px',                
                                    '& .MuiListItemText-root': {color: '#CACACA !important'}, 
                                    '& .MuiListItemIcon-root': {color: '#CACACA !important'},
                                    
                        
                        }
                        
                        }}>
                    <ListItemIcon sx={{minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', color: darkMode ? '#DFEBE9' : '#707070 ',}}>
                        {element.icon}
                    </ListItemIcon>
                    <ListItemText primary={element.name} sx={{ opacity: open ? 1 : 0, color: darkMode ? '#DFEBE9' : '#4F4F4F ', }} />
                </ListItemButton>
                {/* </Link> */}
            </ListItem>

        ))}
        </List>
      </Drawer>
 
    </Box>
  
  );
}

