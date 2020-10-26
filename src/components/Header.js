import React from "react";
import { Link, Route } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../redux/action/userAction";
import GetTokenContainer from "./GetTokenContainer";

import Box from "@material-ui/core/Box";
import { fade, makeStyles } from "@material-ui/core/styles";
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
}));

const Navbar = (props) => {
  const classes = useStyles();

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

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
    </Menu>
  );
  return (
    <>
      <Box>
        <div className={classes.grow}>
          <AppBar position="static" className={classes.code}>
            <Toolbar>
              <IconButton edge="start" color="inherit">
                <Avatar alt="Remy Sharp" src="./avatar.png" />
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
                    <Link to="/abut">About</Link>
                  </Typography>
                </IconButton>

                <IconButton edge="end" color="inherit">
                  <Typography className={classes.title} variant="h6" noWrap>
                    Contact
                  </Typography>
                </IconButton>
                <Link
                  to="#"
                  onClick={() => props.logoutUser()}
                  className="dropdown-item"
                  role="button"
                >
                  <IconButton edge="end" color="inherit">
                    <Typography className={classes.title} variant="h6" noWrap>
                      logout
                    </Typography>
                  </IconButton>
                </Link>
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

// export default Navbar;

// import React from "react";
// import { Link, Route } from "react-router-dom";
// import { Navbar, Nav, NavDropdown } from "react-bootstrap";
// import { connect } from "react-redux";
// import { logout } from "../redux/action/userAction";
// // import PassowrdContainer from "./PasswordContainer";
// // import GetPassowrdContainer from "./GetPasswordContainer";
// import GetTokenContainer from "./GetTokenContainer";
// import Header from "../../../backend/.cache/plugins/strapi-plugin-content-manager/admin/src/containers/EditView/Header";

// function Header(props) {
//   return (
//     <div>
//       <Navbar bg="light" expand="lg">
//         <Navbar.Brand href="#home">Token System</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="mr-auto">
//             <Link to="/" className="dropdown-item" role="button">
//               Home{" "}
//             </Link>
//             <NavDropdown title="Category" id="basic-nav-dropdown">
//               <Link to="#" className="dropdown-item" role="button">
//                 Add New Password Category
//               </Link>
//               <Link to="#" className="dropdown-item" role="button">
//                 viwew Password Category
//               </Link>
//             </NavDropdown>
//             <NavDropdown title="Passowrd" id="basic-nav-dropdown">
//               <Link
//                 to="/GetTokenContainer"
//                 className="dropdown-item"
//                 role="button"
//               >
//                 Add New Password
//               </Link>
//             </NavDropdown>
//             <NavDropdown
//               title={props.userDetails.username}
//               id="basic-nav-dropdown"
//             >
//               <Link to="#" className="dropdown-item" role="button">
//                 view profile
//               </Link>
//               <Link
//                 to="#"
//                 onClick={() => props.logoutUser()}
//                 className="dropdown-item"
//                 role="button"
//               >
//                 Logout
//               </Link>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//       <div></div>
//       <Route path="/GetTokenContainer" component={GetTokenContainer} />
//       {/* <Route path="/GetPasswordContainer" component={GetPassowrdContainer} /> */}
//     </div>
//   );
// }

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
