import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css';
import { useNavigate } from 'react-router-dom';
import foodIcon from "../assets/food-icon.svg"
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';


function NavBar ({cartCount}) {
  /*Functions for MaterialUi imported components*/
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };



  /*Imported Component styling for the shopping cart notification*/
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `1px solid ${theme.palette.background.paper}`,
      padding: '2px'
    },
  }))

  // Initialize navigate hook and define function that handles navigation to Cart Page
  const navigate = useNavigate(); // Initialize
  const handleCartClick = () => {
    navigate('/cart'); // Navigate to the Cart page
  };


  return (
    <nav className="navbar">
      <div className="navbar-icon" style={{cursor:"pointer"}}>
        <img src={foodIcon} alt="Logo" ></img><span className="icon-text">Foodie</span>
    </div>
    <ul className="navbar-links">
      <li>
         <Link to="/" className="nav-link">Home</Link>
      </li>
      <li>
         <Link to="/menu" className="nav-link">Menu</Link>
      </li>
      <li>
         <Link to="/cart" className="nav-link"> Cart</Link>
      </li>
    </ul>
    <div className="icon-space">
      {/*Imported Componengt for cart icon  */}
      <IconButton color="primary" aria-label="add to shopping cart" onClick={handleCartClick}>
        <StyledBadge badgeContent={cartCount} color="success" >
           <ShoppingCartIcon style={{ color:"white"}} />
        </StyledBadge> 
      </IconButton>

      {/*Imported Component that for profile */}
      <IconButton
            onClick={handleClick}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined} >

          <Avatar src="https://t4.ftcdn.net/jpg/09/12/27/33/360_F_912273342_8SEESQ8D9Hj3ZB0UCyGraLMFHyUY3gRv.jpg" 
                  sx={{ width: 35, height: 35}} />

        </IconButton>
      
      {/*Imported Component that shows onclick of profile */}
      <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              slotProps={{
                paper: {
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&::before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem onClick={handleClose}>
                <Avatar /> Profile
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Avatar /> My account
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <PersonAdd fontSize="small" />
                </ListItemIcon>
                Add another account
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                Settings
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
    </div>
  </nav>
  )
}

export default NavBar