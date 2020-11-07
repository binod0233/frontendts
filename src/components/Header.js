import React from "react";
import { Link, Route } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../redux/action/userAction";
import GetTokenContainer from "./GetTokenContainer";
import { useSelector } from "react-redux";

import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles((theme) => ({
  code: {
    background: "#002752",
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },

  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  color: {
    color: "white",
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  const isUserLoggedin = useSelector((state) => state.user.isLoggedIn);

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  if (isUserLoggedin === true) {
    var logged = (
      <Link
        to="#"
        onClick={() => props.logoutUser()}
        className="dropdown-item"
        role="button"
      >
        <IconButton edge="end" color="inherit">
          <Typography
            className={classes.title}
            style={{ color: "black" }}
            variant="h6"
            noWrap
          >
            logout
          </Typography>
        </IconButton>
      </Link>
    );

    var moblog = (
      <Link
        to="#"
        onClick={() => props.logoutUser()}
        className="dropdown-item"
        role="button"
      >
        <MenuItem>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <p>logout</p>
        </MenuItem>
      </Link>
    );
  }

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      getContentAnchorEl={null}
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      id={mobileMenuId}
      keepMounted
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton color="inherit">
          <HomeIcon />
        </IconButton>
        <p>Home</p>
      </MenuItem>
      <MenuItem>
        <IconButton color="inherit">
          <NotificationsIcon />
        </IconButton>
        <p>About</p>
      </MenuItem>
      <MenuItem>
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
        <p>Contact</p>
      </MenuItem>
      {moblog}
    </Menu>
  );
  return (
    <>
      <Box>
        <div className={classes.grow}>
          <AppBar position="static" className={classes.code}>
            <Toolbar>
              <IconButton edge="start" color="inherit">
                <Avatar alt="TS" src="./avatar.png" />
              </IconButton>
              <Typography className={classes.title} variant="h6" noWrap>
                Token system
              </Typography>

              <div className={classes.grow} />
              <div className={classes.sectionDesktop}>
                <IconButton color="inherit">
                  <Typography className={classes.title} variant="h6" noWrap>
                    <Link to="/">Home</Link>
                  </Typography>
                </IconButton>
                <IconButton color="inherit">
                  <Typography className={classes.title} variant="h6" noWrap>
                    <Link to="/abuot">About</Link>
                  </Typography>
                </IconButton>

                <IconButton edge="end" color="inherit">
                  <Typography className={classes.title} variant="h6" noWrap>
                    <Link
                      to="/contact"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      Contact
                    </Link>
                  </Typography>
                </IconButton>
                {logged}
              </div>
              <div className={classes.sectionMobile}>
                <IconButton onClick={handleMobileMenuOpen} color="inherit">
                  <MenuIcon />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
          {renderMobileMenu}
        </div>
      </Box>
      <Route path="/GetTokenContainer" component={GetTokenContainer} />
    </>
  );
};

const mapStatetoProps = (state) => {
  return { userDetails: state.user.userDetails };
};
const mapDispatchtoProps = (dispatch) => {
  return {
    logoutUser: function () {
      dispatch(logout());
    },
  };
};
export default connect(mapStatetoProps, mapDispatchtoProps)(Navbar);
