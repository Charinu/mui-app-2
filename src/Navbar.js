import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import EditIcon from '@mui/icons-material/Edit';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];


function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);


  const handleDrawerToggle = () => {
    handleClose();
    handleClose3();
    setMobileOpen((prevState) => !prevState);
  };

  const [open, setOpen] = React.useState(true);
  const [open3, setOpen3] = React.useState(true);

  const handleClick = () => {
    handleClose3();
    setOpen(!open);
  };

  const handleClick3 = () => {
    handleClose();
    setOpen3(!open3);
  };

  const handleClose = () => {
    setOpen(null);
  };


  const handleClose3 = () => {
    setOpen3(null);
  };


// ------------------------------------------------------  
const [anchorEl, setAnchorEl] = React.useState(null);
const [anchorEl4, setAnchorEl4] = React.useState(null);
const open2 = Boolean(anchorEl);
const open4 = Boolean(anchorEl4);

const handleClick2 = (event) => {
    setAnchorEl(event.currentTarget);
  };

const handleClose2 = () => {
    setAnchorEl(null);
  };

const handleClick4 = (event) => {
    setAnchorEl4(event.currentTarget);
};

const handleClose4 = () => {
    setAnchorEl4(null);
};



const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '4px 0',
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        '&:active': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  }));
// ------------------------------------------------------  



// การแสดงข้อความต่าง ๆ ของ drawer
  const drawer = (
    // <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
    <Box>
      {/* <Typography variant="h8" sx={{ my: 2 }}>
        Menu
      </Typography>

      <Divider /> */}

      <List>
        {/* {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton onClick={handleDrawerToggle} sx={{ textAlign: 'left' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))} */}


        <ListItem disablePadding>
            <ListItemButton onClick={handleDrawerToggle} sx={{ textAlign: 'left' }}>
              <ListItemText primary="หน้าหลัก" />
            </ListItemButton>
        </ListItem>


        {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/}
        {/* เพิ่ม ListItem ใหม่เข้าไปเองอีก 1 ชุด */}
        <ListItemButton onClick={handleClick}>
            <ListItemIcon>
                <InboxIcon />
            </ListItemIcon>
        
            <ListItemText primary="Master" />
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            
                <ListItemButton onClick={handleDrawerToggle} sx={{ pl: 4 }}>
                    <ListItemIcon>
                        <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="ข้อมูล Item" />
                </ListItemButton>
            </List>
        </Collapse>
        {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/}


        {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/}
        {/* เพิ่ม ListItem ใหม่เข้าไปเองชุดที่ 2 */}
        <ListItemButton onClick={handleClick3}>
            <ListItemIcon>
                <InboxIcon />
            </ListItemIcon>
        
            <ListItemText primary="Key In" />
            {open3 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={open3} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            
                <ListItemButton onClick={handleDrawerToggle} sx={{ pl: 4 }}>
                    <ListItemIcon>
                        <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Sale Order" />
                </ListItemButton>

                <ListItemButton onClick={handleDrawerToggle} sx={{ pl: 4 }}>
                    <ListItemIcon>
                        <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="BOM" />
                </ListItemButton>

                <ListItemButton onClick={handleDrawerToggle} sx={{ pl: 4 }}>
                    <ListItemIcon>
                        <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="MR" />
                </ListItemButton>

                <ListItemButton onClick={handleDrawerToggle} sx={{ pl: 4 }}>
                    <ListItemIcon>
                        <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="การจอง" />
                </ListItemButton>


            </List>
        </Collapse>
        {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/}

        <ListItem disablePadding>
            <ListItemButton onClick={handleDrawerToggle} sx={{ textAlign: 'left' }}>
              <ListItemText primary="เกี่ยวกับ" />
            </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
            <ListItemButton onClick={handleDrawerToggle} sx={{ textAlign: 'left' }}>
              <ListItemText primary="ติดต่อเรา" />
            </ListItemButton>
        </ListItem>


      </List>
    </Box>
  );




  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    // การแสดงผลหน้าจอกว้างปกติ
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            {/* แสดงMenuIcon หรือ Hamberger Menu 3 ขีด */}
            <MenuIcon /> 
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            ระบบวางแผนการสั่งซื้อวัตถุดิบ
          </Typography>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {/* {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))} */}


            <Button sx={{ color: '#fff' }}>
                หน้าหลัก
            </Button>


            {/* เพิ่ม ButtonList มาใหม่ 1 ชุด */}
            {/* ==================================================================== */}
            <Button
                id="demo-customized-button1"
                aria-controls={open4 ? 'demo-customized-menu1' : undefined}
                aria-haspopup="true"
                aria-expanded={open4 ? 'true' : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick4}
                endIcon={<KeyboardArrowDownIcon />}
            >
            Master
            </Button>
      
            <StyledMenu
                id="demo-customized-menu1"
                MenuListProps={{
                'aria-labelledby': 'demo-customized-button1',
                }}
                anchorEl={anchorEl4}
                open={open4}
                onClose={handleClose4}
            >
                <MenuItem onClick={handleClose4} disableRipple>
                <EditIcon />
                ข้อมูล Item
                </MenuItem>

                
                <MenuItem onClick={handleClose4} disableRipple>
                <FileCopyIcon />
                ข้อมูลหน่วยนับ
                </MenuItem>
                
                <Divider sx={{ my: 0.5 }} />
                
                <MenuItem onClick={handleClose4} disableRipple>
                <ArchiveIcon />
                ข้อมูลลูกค้า
                </MenuItem>
                
                <MenuItem onClick={handleClose4} disableRipple>
                <EditIcon />
                {/* <MoreHorizIcon /> */}
                ข้อมูลผู้ขาย
                </MenuItem>
                
            </StyledMenu>
            {/* ==================================================================== */}



            {/* เพิ่ม ButtonList มาใหม่ชุดที่ 2 */}
            {/* ==================================================================== */}
            <Button
                id="demo-customized-button"
                aria-controls={open2 ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open2 ? 'true' : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick2}
                endIcon={<KeyboardArrowDownIcon />}
            >
            Key In
            </Button>
      
            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open2}
                onClose={handleClose2}
            >
                <MenuItem onClick={handleClose2} disableRipple>
                <EditIcon />
                Sale Order
                </MenuItem>

                <Divider sx={{ my: 0.5 }} />
                
                <MenuItem onClick={handleClose2} disableRipple>
                <FileCopyIcon />
                BOM
                </MenuItem>
                
                
                <MenuItem onClick={handleClose2} disableRipple>
                <ArchiveIcon />
                MR
                </MenuItem>
                
                <MenuItem onClick={handleClose2} disableRipple>
                <EditIcon />
                {/* <MoreHorizIcon /> */}
                การจอง
                </MenuItem>
                
            </StyledMenu>
            {/* ==================================================================== */}


            <Button sx={{ color: '#fff' }}>
                เกี่ยวกับ
            </Button>

            <Button sx={{ color: '#fff' }}>
                ติดต่อเรา
            </Button>


          </Box>

        </Toolbar>
      </AppBar>



      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      {/* <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography>
            abc
        </Typography>
      </Box> */}

    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;