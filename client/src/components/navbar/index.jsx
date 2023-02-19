import {useState,useEffect} from 'react'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { height } from '@mui/system';
import { useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Link from '@mui/material/Link';
// import "./navbar.css"

const pages = ['Rewards', 'Location', 'Leaderboard'];
const pagesLink = ['/rewards', '/dashboard/location', '/dashboard/leaderboard'];
const settings = ['Logout'];
const settingsLink = ['/account', '/logout'];



export default function Nav() {

    const navigate = useNavigate();
    const [state, setState] = useState({
      mobileView: false,
      drawerOpen: false
    });
  const { mobileView, drawerOpen } = state;

    useEffect(() => {
      const setResponsiveness = () => {
        return window.innerWidth < 900
          ? setState((prevState) => ({ ...prevState, mobileView: true }))
          : setState((prevState) => ({ ...prevState, mobileView: false }));
      };
  
      setResponsiveness();
      window.addEventListener("resize", () => setResponsiveness());
  
      return () => {
        window.removeEventListener("resize", () => setResponsiveness());
      }
    }, []);


    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = (redirect) => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
  
    const redirect = (page) => () => {
      const index = pages.indexOf(page);
      navigate(pagesLink[index]);
    }
    
    const redirectSettings = (page) => () => {
      const index = settings.indexOf(page);
      navigate(settingsLink[index]);
    }
    const handleDrawerOpen = () =>
    setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
    setState((prevState) => ({ ...prevState, drawerOpen: false }));

    const getDrawerChoices = () => {
        return (
          <Box sx={{ flexGrow: 1,alignItems: 'center' }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={redirect(page)}
                    sx={{ my: 2, color: 'black', display: 'block',flexGrow:1 }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>

        );
    };


      return (
        <AppBar position="static" style={{backgroundColor : "black"}}>

<Container maxWidth="x1">
{mobileView? 
        <>
        <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen

          }}
        >
          <MenuIcon />
        </IconButton >
        <Drawer
        sx = {{ width:'20%'}}
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div>{getDrawerChoices()}</div>
        </Drawer>
        <div>
        <button 
                style={
                  {
                    backgroundColor: "black",
                    border: "none",
                    color: "white",
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    textDecoration: 'none',
                    fontSize: "30px",
                    cursor: "pointer"
                  }   
                }
              onClick={
                () => navigate("/dashboard")

              }>LOGO</button>

        </div>
</Toolbar>
        
        </>:<>
        <Toolbar disableGutters>
              <button 
                style={
                  {
                    backgroundColor: "black",
                    border: "none",
                    color: "white",
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    textDecoration: 'none',
                    fontSize: "30px",
                    cursor: "pointer"
                  }   
                }
              onClick={
                () => navigate("/dashboard")

              }>LOGO</button>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={redirect(page)}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
    
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={redirectSettings(setting)}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
        
        
        </>
        }



          </Container>
        </AppBar>
      );
  }
  