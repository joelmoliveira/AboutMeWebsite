import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

// copy languages
import contentEnglish from "../../../src/Content/contentEnglish.json";

import ContactFormDialog from "../Dialog/Dialog";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ ml: "auto" }}>
          <Box display={{ xs: "none", md: "block" }}>
            <Link to="/" sx={{ textDecoration: "none", color: "inherit" }}>
              <Button color="inherit">{contentEnglish.navbar.home}</Button>
            </Link>
            <ScrollLink
              to="id1"
              smooth={true}
              duration={500}
              offset={-50}
              spy={true}
            >
              <Button color="inherit">{contentEnglish.navbar.skills}</Button>
            </ScrollLink>
            <ScrollLink
              to="id2"
              smooth={true}
              duration={500}
              offset={-50}
              spy={true}
            >
              <Button color="inherit">{contentEnglish.navbar.projects}</Button>
            </ScrollLink>
            {/* <Link to="/skills" sx={{ textDecoration: 'none', color: 'inherit' }}>
              <Button color="inherit">{contentEnglish.navbar.skills}</Button>
            </Link>
            <Link to="/projects" sx={{ textDecoration: 'none', color: 'inherit' }}>
              <Button color="inherit">{contentEnglish.navbar.projects}</Button>
            </Link> */}
            <Link to="/rules" sx={{ textDecoration: "none", color: "inherit" }}>
              <Button color="inherit">{contentEnglish.navbar.about}</Button>
            </Link>
            <Button color="inherit" onClick={handleOpenDialog}>
              {contentEnglish.navbar.contact}
            </Button>
          </Box>
          <Box display={{ xs: "block", md: "none" }}>
            <IconButton
              edge="end"
              sx={{ ml: 2 }}
              color="inherit"
              aria-label="menu"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBar>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
        handleOpenDialog={handleOpenDialog}
      />
      {isDialogOpen && (
        <ContactFormDialog open={isDialogOpen} onClose={handleCloseDialog} />
      )}
    </Box>
  );
};

const MobileMenu = ({ isOpen, onClose, handleOpenDialog }) => {
  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
      <List>
        <ListItem button>
          <Link
            to="/"
            sx={{ textDecoration: "none", color: "inherit" }}
            onClick={onClose}
          >
            Home
          </Link>
        </ListItem>
        <ListItem button>
          <Link
            to="/about"
            sx={{ textDecoration: "none", color: "inherit" }}
            onClick={onClose}
          >
            About me
          </Link>
        </ListItem>
        <ListItem button>
          <Link
            to="/about"
            sx={{ textDecoration: "none", color: "inherit" }}
            onClick={onClose}
          >
            Skills
          </Link>
        </ListItem>
        <ListItem button>
          <Button color="inherit" onClick={handleOpenDialog}>
            Projects
          </Button>
        </ListItem>
        <ListItem button>
          <Button color="inherit" onClick={handleOpenDialog}>
            Contact
          </Button>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Header;
