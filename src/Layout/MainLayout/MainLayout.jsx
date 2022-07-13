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
import './MainLayout.css';
import Logo from '../../Assets/Logo.png';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";


const MainLayout = () => {

    return (
        <div className="layout">
            <a href="/" className="href-cards">Home</a>
            <a href="/about" className="href-cards">About Me</a>
        </div>
    )
}

export default MainLayout;