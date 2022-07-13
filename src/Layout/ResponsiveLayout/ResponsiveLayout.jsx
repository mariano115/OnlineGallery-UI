import React from "react";
import {
    Drawer,
    ListItem,
    ListItemIcon,
    ListItemText,
    Button,
} from "@material-ui/core";
import {
    HomeOutlined, InboxOutlined
} from "@material-ui/icons";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomePage from '../../Views/Home/Home';
import InfoIcon from '@mui/icons-material/Info';
import './ResponsiveLayout.css';
import Logo from '../../Assets/Logo.png';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

const data = [
    {
        name: "Home",
        path: "/",
        icon: <HomeOutlined />,
    },
    { name: "About Me", path: "/about", icon: <InfoIcon /> }
];

const ResponsiveLayout = () => {
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const getList = () => (
        <div style={{ width: 250 }} onClick={() => setDrawerOpen(false)}>
            {data.map((item, index) => (
                <ListItem button component={Link} to={item.path} key={index}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.name} />
                </ListItem>
            ))}
        </div>
    );

    return (
        <div className="layout">
            <Button onClick={() => setDrawerOpen(true)}>
                <IconButton>
                    <MenuIcon />
                </IconButton>
            </Button>
                <Drawer
                    anchor='left'
                    open={drawerOpen}
                    onClose={() => setDrawerOpen(false)}
                >
                    {getList()}
                </Drawer>
            <img src={Logo} alt="Mariano Guerrero Developer Logo" className="mariano-logo" />
        </div>
    )
}

export default ResponsiveLayout;